// models/TradeBook.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const TradeBookSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // set true if every transaction must belong to a user
  },
  orderId: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4()
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
