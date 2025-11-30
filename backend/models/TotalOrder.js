const mongoose = require("mongoose");

const totalOrdersSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  symbol: {
    type: String,
    required: true
  },

  side: {
    type: String,
    enum: ["BUY", "SELL", "CANCELLED"],
    required: true
  },

  orderType: {
    type: String,
    enum: ["MARKET", "LIMIT"],
    required: true
  },

  qty: {
    type: Number,
    required: true,
    min: 1
  },

  price: {
    type: Number,
    required: function () {
      return this.orderType === "LIMIT";  // price required only for LIMIT
    }
  },

  status: {
    type: String,
    default: "executed",
    enum: ["executed"]   // locked to "executed"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("TotalOrder", totalOrdersSchema);
