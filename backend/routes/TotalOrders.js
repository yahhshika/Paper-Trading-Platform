const express = require("express");
const router = express.Router();
const { body, validationResult} = require('express-validator');
const getId = require("../middlewares/users/getUserInfo");
const TotalOrder = require("../models/TotalOrder");

router.get("/",getId,async(req,res)=>{
    if(!req.user._id){
        res.status(400).json({error:"login/signup to add"})
        return;
    }
    try{

        let result = await TotalOrder.find({ userId: req.user._id });
        if(!result){
            res.status(400).json({error:"no total orders data available"});
            return;
        }
        res.json({message:"all total orders data fetched", result})
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

router.post("/",getId,[
    body('symbol','give a propersymbol').exists(),
    body('qty', 'min qty is 1').isInt({ min: 1 }),
    body('price', 'min price is 1').isInt({ min: 1 }),
    body('side','side must be BUY or SELL').isIn(['BUY', 'SELL']),
    body('orderType','orderType is required').isIn(['LIMIT', 'MARKET'])
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
        let newTotalOrder = new TotalOrder({
            userId: req.user._id,
            symbol: req.body.symbol,
            side: req.body.side,
            orderType:req.body.orderType,
            price:req.body.price,
            qty:req.body.qty

            
        })
        let result = await newTotalOrder.save();
        if(!result){
            res.status(400).json({error:"error in adding a new totalOrder"})
            return;
        }
        res.json({message:"successfully added a new totalOrder", result});
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

module.exports = router;