// models/Transaction.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const TransactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // set true if every transaction must belong to a user
  },

  type: {
    type: String,
    required: true,
    enum: ['funds_added', 'withdrawal'],
  },

  amt: {
    type: Number,
    required: true,
    min: 0,
  },

  status: {
    type: String,
    required: true,
    enum: ['successful'], // per your spec; extend to ['successful','failed','pending'] if needed
    default: 'successful'
  },

  ref: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4()
  },

  remarks: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



// Export model
module.exports = mongoose.model('Transaction', TransactionSchema);
