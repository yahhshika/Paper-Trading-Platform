const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    funds: {
      availableCash: {
        type: Number,
        default: 100000, // starting virtual money (change if you want)
        min: 0,
      },
 
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

  

  }, 

);

// You can add methods later for comparing passwords or JWT

const User = mongoose.model("User", userSchema);

module.exports = User;
