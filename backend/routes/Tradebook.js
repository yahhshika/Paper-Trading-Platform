const express = require("express");
const router = express.Router();
const { body, validationResult} = require('express-validator');
const getId = require("../middlewares/users/getUserInfo");
const Tradebook = require("../models/Tradebook");

router.get("/",getId,async(req,res)=>{
    if(!req.user._id){
        res.status(400).json({error:"login/signup to add"})
        return;
    }
    try{

        let result = await Tradebook.find({ userId: req.user._id });
        if(!result){
            res.status(400).json({error:"no tradebook data available"});
            return;
        }
        res.json({message:"all tradebook data fetched", result})
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

// Symbol, side:["BUY", "SELL"], qty, price, tradeTpe:["market", "limit"]
router.post("/",getId,[
    body('symbol','give a proper symbol').exists(),
    body('qty', 'min qty is 1').exists().isInt({ min: 1 }),
    body('price', 'min price is 1').exists().isDecimal({ min: 1.0 }),
    body('tradeType', 'min amt is 1').exists().isIn(["MARKET","LIMIT"]),
    body('side', 'side is either BUY or SELL').exists().isIn(["BUY","SELL"]),
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
       
        let newTradeEntry = new Tradebook({
            userId:req.user._id,
            symbol:req.body.symbol,
            side: req.body.side,
            qty:req.body.qty,
            price:req.body.price,
            tradeType:req.body.tradeType
        });
        let result = await newTradeEntry.save();
        if(!result){
            res.status(400).json({error:"unable to add to tradebook"})
            return;
        }
        res.json({message:"added to tradebook successfully", result})
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

module.exports = router;