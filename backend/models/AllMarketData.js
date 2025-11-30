const mongoose = require("mongoose");

const allMarketSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },

  company: {
    type: String,
    required: true,
    trim: true,
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

  updatedAt: {
    type: Date,
    default: Date.now,
  },
  prevClose: { 
    type: Number,
    required: true
  },
});

const AllMarket = mongoose.model("AllMarket", allMarketSchema);

module.exports = AllMarket;
