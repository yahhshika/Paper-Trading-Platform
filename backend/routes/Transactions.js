const Transaction =  require("../models/Transactions");
const express = require("express");
const router = express.Router();
const { body, validationResult} = require('express-validator');
const getId = require("../middlewares/users/getUserInfo");

router.get("/", (req,res)=>{
    res.send("root is fine")
})


router.post("/",getId,[
    body('type','give a proper type of transaction').exists().isIn(["funds_added","withdrawal"]),
    body('amt', 'min amt is 1').exists().isDecimal({ min: 1.0 }),
], async(req,res)=>{
    if(!req.user._id){
        res.status(400).json({error:"login/signup to add"})
        return;
    }
    let validatedResult = validationResult(req);
    if(validatedResult.errors.length){
        res.status(400).json({error: validatedResult.errors})
        return;
    }
    try{
        let newTransaction = new Transaction({
            userId: req.user._id,
            type:req.body.type,
            amt:req.body.amt,
            remarks:req.body.remarks? req.body.remarks : ""  
        })
        let result = await newTransaction.save();
        if(!result){
            res.status(400).json({error:"error in adding a new transaction"})
            return;
        }
        res.json({message:"successfully added a new transaction", result});
    }catch(err){
        res.status(400).json({message: err.message})
    }
})
module.exports = router;