// models/Holding.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const HoldingSchema = new Schema({
  // owner (reference to User)
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },

  // idFromMain: id from AllMarket / watchlist (you said this is an ObjectId)
  idFromMain: {
    type: Schema.Types.ObjectId,
    ref: 'Position',   // change ref name if your collection is named differently
    required: true,
    index: true,
  },

  // instrument details
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

  // numeric values
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

module.exports = mongoose.model('Holding', HoldingSchema);
