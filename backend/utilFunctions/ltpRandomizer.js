// backend/utils/ltpRandomizer.js
// Requires: mongoose connected before using, io is the socket.io Server instance
const AllMarket = require("../models/AllMarketData")
const Watchlist = require('../models/WatchList');
const Position = require('../models/Postions');
const Holding = require('../models/Holdings');
const OpenOrder = require('../models/OpenOrder');
const TotalOrder = require('../models/TotalOrder');
const TradeBook = require('../models/Tradebook');

function randFloat(min, max) {
  return Math.random() * (max - min) + min;
}
function to2(n) {
  return Math.round(n * 100) / 100;
}

module.exports = function createLtpRandomizer() {
  let running = false;
  let stopped = false;
  let timeoutId = null;

  async function runOnce(io, opts = {}) {
    if (running) return;
    running = true;
    try {
      const total = await AllMarket.countDocuments().exec();
      if (!total) return;

      const index = Math.floor(Math.random() * total);
      const stock = await AllMarket.findOne().skip(index).exec();
      if (!stock) return;

      const maxPercent = typeof opts.maxPercent === 'number' ? opts.maxPercent : 1;
      const percentChange = randFloat(-maxPercent, maxPercent);

      const oldLtp = stock.ltp;
      const prevClose = stock.prevClose ?? stock.ltp;
      const newLtp = to2(stock.ltp * (1 + percentChange / 100));
      const dayChange = to2(newLtp - prevClose);
      const dayChangePercent = prevClose ? to2((dayChange / prevClose) * 100) : 0;

      // Update AllMarket doc
      stock.prevClose = prevClose;
      stock.ltp = newLtp;
      stock.dayChange = dayChange;
      stock.dayChangePercent = dayChangePercent;
      stock.updatedAt = new Date();
      await stock.save();

      const symbol = stock.symbol;

      // Propagate updates to Watchlist, Position, Holding (exact copy of AllMarket's change)
      await Watchlist.updateMany(
        { symbol },
        {
          $set: {
            ltp: newLtp,
            dayChange,
            dayChangePercent,
            addedAt: new Date() // you can change to updatedAt if preferred
          }
        }
      ).exec();

      await Position.updateMany(
        { symbol },
        {
          $set: {
            ltp: newLtp,
            dayChange,
            dayChangePercent
          }
        }
      ).exec();

      await Holding.updateMany(
        { symbol },
        {
          $set: {
            ltp: newLtp,
            dayChange,
            dayChangePercent
          }
        }
      ).exec();

      // Handle OpenOrders: update LTP fields and execute LIMIT orders if condition met
      const openOrders = await OpenOrder.find({ symbol, orderType: 'LIMIT' }).exec();
      const executedOrders = [];

      for (const order of openOrders) {
        // update LTP fields on order
        order.ltp = newLtp;
        order.dayChange = dayChange;
        order.dayChangePercent = dayChangePercent;

        // determine execution
        let shouldExecute = false;
        if (order.side === 'BUY' && newLtp <= order.price) shouldExecute = true;
        if (order.side === 'SELL' && newLtp >= order.price) shouldExecute = true;

        if (shouldExecute) {
          // mark executed on OpenOrder
          order.status = 'Executed';
          order.executedAt = new Date();
          await order.save();

          // 1) create TotalOrder entry (history of completed orders)
          const totalOrderDoc = new TotalOrder({
            userId: order.userId,
            symbol: order.symbol,
            side: order.side,
            orderType: order.orderType,
            qty: order.qty,
            price: order.price,
            status: 'executed', // matches your TotalOrder schema enum
            createdAt: new Date()
          });
          await totalOrderDoc.save();

          // 2) create TradeBook entry
          // TradeBook.orderId in your schema is a unique string; we will store the OpenOrder._id as string
          const tradeBookDoc = new TradeBook({
            userId: order.userId || undefined,
            orderId: order._id.toString(), // keep it unique; cast to string
            symbol: order.symbol,
            side: order.side,
            qty: order.qty,
            price: order.price,
            tradeType: order.orderType === 'LIMIT' ? 'LIMIT' : 'MARKET',
            executed_At: order.executedAt,
            Status: 'Executed'
          });
          await tradeBookDoc.save();

          executedOrders.push({
            openOrder: order,
            totalOrder: totalOrderDoc,
            tradeBook: tradeBookDoc
          });

          // NOTE: we keep the OpenOrder document (marked Executed). If you want to remove it, we can delete it instead.
        } else {
          // not executed: just save ltp/day update on order
          await order.save();
        }
      }

      // Emit updates via Socket.IO
      if (io && typeof io.emit === 'function') {
        io.emit('ltp_update', {
          id: stock._id,
          symbol,
          ltp: newLtp,
          dayChange,
          dayChangePercent,
          updatedAt: stock.updatedAt
        });

        for (const ex of executedOrders) {
          io.emit('order_executed', {
            orderId: ex.openOrder._id,
            userId: ex.openOrder.userId,
            symbol: ex.openOrder.symbol,
            side: ex.openOrder.side,
            qty: ex.openOrder.qty,
            price: ex.openOrder.price,
            executedAt: ex.openOrder.executedAt,
            totalOrderId: ex.totalOrder._id,
            tradeBookId: ex.tradeBook._id
          });
        }
      }

      if (opts.verbose) {
        console.log(`[LTP] ${symbol} ${oldLtp} -> ${newLtp} (${dayChangePercent}%)`);
        if (executedOrders.length) {
          console.log(`[EXECUTED] ${executedOrders.length} order(s) for ${symbol}`);
        }
      }
    } catch (err) {
      console.error('Error in LTP randomizer runOnce:', err);
    } finally {
      running = false;
    }
  }

  function start(io, opts = {}) {
    if (stopped) stopped = false;
    const intervalMs = typeof opts.intervalMs === 'number' ? opts.intervalMs : 15000;

    async function loop() {
      if (stopped) return;
      await runOnce(io, opts);
      if (stopped) return;
      timeoutId = setTimeout(loop, intervalMs);
    }

    loop();
    return {
      stop: () => {
        stopped = true;
        if (timeoutId) clearTimeout(timeoutId);
      }
    };
  }

  function stop() {
    stopped = true;
    if (timeoutId) clearTimeout(timeoutId);
  }

  return { start, stop };
};
