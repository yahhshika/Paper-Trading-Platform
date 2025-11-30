const express = require("express");
const router = express.Router();
const { body, validationResult} = require('express-validator');
const getId = require("../middlewares/users/getUserInfo");
const Tradebook = require("../models/Tradebook");

router.get("/",(req,res)=>{
    res.send("root is working")
})

module.exports = router;