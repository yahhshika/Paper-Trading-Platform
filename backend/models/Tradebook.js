// models/TradeBook.js
const mongoose = require('mongoose');

const TradeBookSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TotalOrder',
    required: true
  },

  symbol: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },

  side: {
    type: String,
    required: true,
    enum: ['BUY', 'SELL']
  },

  qty: {
    type: Number,
    required: true,
    min: 1
  },

  price: {
    type: Number,      // use Decimal128 if you want high precision
    required: true,
    min: 0
  },

  tradeType: {
    type: String,
    required: true,
    enum: ['MARKET', 'LIMIT']
  },

  executed_At: {
    type: Date,
    required: true,
    default: Date.now
  },

  Status: {
    type: String,
    required: true,
    enum: ['Executed'],
    default: 'Executed'
  }
});


module.exports = mongoose.model('TradeBook', TradeBookSchema);
