const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  idFromMain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AllMarket",         // refers to your main stock table
    required: true,
  },

  symbol: {
    type: String,
    required: true,
    uppercase: true,
  },

  company: {
    type: String,
    required: true,
  },

  ltp: {
    type: Number,
    required: true,
  },

  dayChange: {
    type: Number,
    default: 0,
  },

  dayChangePercent: {
    type: Number,
    default: 0,
  },

  addedAt: {
    type: Date,
    default: Date.now,
  },
});

const Watchlist = mongoose.model("Watchlist", watchlistSchema);

module.exports = Watchlist;
