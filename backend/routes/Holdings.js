const express = require("express");
const router = express.Router();
const { body, validationResult} = require('express-validator');
const Position = require("../models/Postions")
const getId = require("../middlewares/users/getUserInfo");
const Holding = require("../models/Holdings");


// router.get("/",(req,res)=>{
//     res.send("root is working")
// })

router.post("/",getId,[
    body('symbol','give a propersymbol').exists(),
    body('company', 'company should exist').exists(),
    body('qty', 'min qty is 1').isInt({ min: 1 })
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

        let {symbol, company, ltp, avgPrice, qty, dayChange,dayChangePercent} = req.body;
        let alreadyInHoldings = await Holding.findOne({symbol:symbol});
        if(alreadyInHoldings && alreadyInHoldings.userId.toString() === req.user._id.toString()){
            alreadyInHoldings.avgPrice = ((alreadyInHoldings.qty * alreadyInHoldings*avgPrice) + qty*avgPrice)/(alreadyInHoldings.qty + qty)
            alreadyInHoldings.qty = alreadyInHoldings.qty + qty;
            alreadyInHoldings.ltp = ltp;
            alreadyInHoldings.dayChange = dayChange;
            alreadyInHoldings.dayChangePercent = dayChangePercent;
            let result = await Holding.findByIdAndUpdate({_id:alreadyInHoldings._id},alreadyInHoldings,{new:true, runValidators:true});
            if(!result){
                throw new Error("error in updating existing one")
            }else{
                res.json({result});
            }
        }else if(alreadyInHoldings && alreadyInHoldings.userId.toString() !== req.user._id.toString()){
            res.status(400).json({error:"you are not allowed to perform this operation"})
            return;
        }
        else{
            let targetStock = await Position.findOne({symbol:symbol})
            let newHolding = new Holding({
                userId:req.user._id,
                idFromMain: targetStock.idFromMain,
                symbol:symbol,
                company:company,
                ltp:ltp,
                avgPrice:avgPrice,
                qty:qty,
                dayChange:dayChange,
                dayChangePercent:dayChangePercent,
            })
            let result = await newHolding.save();
            if(!result){
                throw new Error("error in adding new one")
          
            }else{
                res.json({result});
                return;
            }
        }
    }catch(err){
        res.status(400).json({message: err.message})
    }
})


router.put("/:id",getId,[
    body('qty', 'min qty is 1').isInt({ min: 1 })
],async(req,res)=>{
    let validatedResult = validationResult(req);
    if(validatedResult.errors.length){
        res.status(400).json({error: validatedResult.errors})
        return;
    }
    if(!req.user._id){
        res.status(400).json({error:"login/signup to add"})
        return;
    }
    try{
        let {qty} = req.body;
        let {id} = req.params
        let targetStock = await Holding.findById(id);
        if(!targetStock){
            res.status(400).json({error:"no such stock exist"})
            return;
        }
        if(targetStock.userId.toString() !== req.user._id.toString()){
            res.status(400).json({error:"you are not allowed to perform this operation"})
            return;
        }
        targetStock.qty  = targetStock.qty - qty;
        if(targetStock.qty === 0){
            let result = await Holding.findByIdAndDelete(id);
            if(!result){
                res.status(400).json({error:"error in deleting the stock, try again"});
            }
            res.json({message:`successfully removed ${qty} of the required stocks from positions`, result})
        }else{
            let result = await Holding.findByIdAndUpdate(id,targetStock,{new:true, runValidators:true});
            if(!result){
                res.status(400).json({error:"error in deleting the stock, try again"});
            }
            res.json({message:`successfully removed ${qty} of the required stocks from positions`, result})
        }
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})

module.exports = router;