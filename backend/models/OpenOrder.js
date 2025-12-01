// models/OpenOrder.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const OpenOrderSchema = new Schema(
  {
    // owner (User reference)
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // From where this order originated
    // allowed: "position", "holding", "watchlist"
    source: {
      type: String,
      enum: ["position", "holding", "watchlist"],
      required: true,
    },

    // Stock symbol
    symbol: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      index: true,
    },

    company: {
        type: String,
        required: false,
        trim: true,
    },

    // BUY or SELL
    side: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
    },

    // LIMIT (you can extend later: MARKET, SL, SL-M, etc.)
    orderType: {
      type: String,
      enum: ["LIMIT"],
      required: true,
      default: "LIMIT",
    },

    // quantity
    qty: {
      type: Number,
      required: true,
      min: 1,
    },

    // price for limit order
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    dayChange: {
        type: Number,
        required: false,
        default: 0,
    },
    ltp: {
        type: Number,
        required: true,
        min: 0,
    },

    dayChangePercent: {
        type: Number,
        required: false,
        default: 0,
    },
    createdAt:{
    type:Date,
    default:Date.now,
    }
  }
);

// Composite index (useful for querying user orders fast)
OpenOrderSchema.index({ userId: 1, symbol: 1 });

module.exports = mongoose.model("OpenOrder", OpenOrderSchema);
