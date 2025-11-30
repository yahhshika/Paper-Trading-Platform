// models/Position.js
// Mongoose schema for a trading "position" document
// Fields requested by user:
// - userId: owner_id from User
// - idFromMain: id taken from AllMarket / watchlist
// - symbol: e.g. "INFY"
// - company: e.g. "Infosys pvt ltd"
// - ltp: last traded price
// - avgPrice: average executed price for this position
// - qty: quantity held
// - dayChange: absolute change for the day
// - dayChangePercent: percent change for the day

const mongoose = require('mongoose');
const { Schema } = mongoose;

const PositionSchema = new Schema({
  // reference to the User who owns this position (owner_id)
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },

  // idFromMain: the id that the watchlist copied from AllMarket
  // keep as String because it may be an external system id (not necessarily ObjectId)
  idFromMain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Watchlist",         // refers to your main stock table
    required: true,
  },

  // instrument symbol and company name
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

  // prices and quantity
  ltp: {
    type: Number,
    required: true,
    min: 0,
  },

  avgPrice: {
    type: Number,
    required: true,
    min: 0,
  },

  qty: {
    type: Number,
    required: true,
    min: 0,
  },

  // day change absolute and percent
  dayChange: {
    type: Number,
    required: false,
    default: 0,
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
});

// Compound unique constraint: one position per user per idFromMain/symbol


module.exports = mongoose.model('Position', PositionSchema);
