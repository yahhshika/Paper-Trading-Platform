const express = require("express");
const router = express.Router();
const { body, validationResult} = require('express-validator');
const getId = require("../middlewares/users/getUserInfo");
const openOrder = require("../models/OpenOrder");
const OpenOrder = require("../models/OpenOrder");


router.get("/",getId,async(req,res)=>{
    if(!req.user._id){
        res.status(400).json({error:"login/signup to add"})
        return;
    }
    try{

        let result = await OpenOrder.find({ userId: req.user._id });
        if(!result){
            res.status(400).json({error:"no OpenOrder data available"});
            return;
        }
        res.json({message:"all OpenOrders fetched", result})
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

router.post("/",getId,[
    body('symbol','give a propersymbol').exists(),
    body('company', 'company should exist').exists(),
    body('qty', 'min qty is 1').isInt({ min: 1 }),
    body('ltp', 'min ltp is 1').isDecimal({ min: 1.0 }),
    body('price', 'min price is 1').exists().isInt({ min: 1 }),
    body('source','source must be holding or watchlist').isIn(['holding', 'watchlist']),
    body('side','side must be BUY or SELL').isIn(['BUY', 'SELL']),
    body('orderType','orderType is required').exists()
],async(req,res)=>{
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
        let newopenOrder = new OpenOrder({
            userId: req.user._id,
            source:req.body.source,
            company:req.body.company,
            symbol:req.body.symbol,
            side:req.body.side,
            orderType: req.body.orderType,
            qty:req.body.qty,
            ltp:req.body.ltp,
            price:req.body.price,
            dayChange:req.body.dayChange? req.body.dayChange: 0,
            dayChangePercent: req.body.dayChangePercent?req.body.dayChangePercent : 0,
        })
        let result = await newopenOrder.save();
        if(!result){
            res.status(400).json({error:"error in deleting the stock, try again"});
        }
        res.json({message:`successfully added limit order`, result})
    }catch(err){
        res.status(400).json({message: err.message})
    }
    
});

router.put("/:id",getId,async(req,res)=>{
    if(!req.user._id){
        res.status(400).json({error:"login/signup to add"})
        return;
    }
    try{

        let {id} = req.params;
        let target =await OpenOrder.findById(id);
        if(!target){
            res.status(400).json({error:"no such stock exists"});
            return;
        }
        else if(target.userId.toString() !== req.user._id){
            res.status(400).json({error:"you are allowed to perform this operation"});
            return;
        }
        let result= await OpenOrder.findByIdAndDelete(id);
        if(!result){
            res.status(400).json({error:"error in deleting, try again !"});
            return;
        }
        res.json({message:"successfully deleted !", result})
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

module.exports = router;