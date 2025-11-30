const express = require("express");
const router = express.Router();
const AllMarket = require("../models/AllMarketData");
const Watchlist = require("../models/WatchList")
const getId = require("../middlewares/users/getUserInfo")
router.get("/",(req,res)=>{
    res.send("root is working.")
})

router.get("/:symbol",getId,async(req,res)=>{
    if(!req.user._id){
        res.status(400).json({error:"signup to add"});
        return;
    }
    try{

        let symbol = req.params.symbol;
        let already = await Watchlist.findOne({symbol:symbol});
        if(already){
            res.status(400).json({error:"already in watchlist"});
            return;
        }

        let userId = req.user._id;
        let targetStock =await AllMarket.findOne({symbol:symbol});
        let newWatchListItem = new Watchlist({
            userId: userId,
            idFromMain: targetStock._id,
            symbol: symbol,
            company: targetStock.company,
            ltp: targetStock.ltp,
            dayChange: targetStock.dayChange,
            dayChangePercent: targetStock.dayChangePercent
        });
        let result = await newWatchListItem.save();
        if(!result){
            throw new Error("issue in adding")
        }
        else{
            res.json({message:"added successfully!", result})
        }
    }catch(err){
        res.status(400).json({message: err.message})
    }
    
})

router.delete("/:id",getId,async(req,res)=>{
    if(!req.user._id){
        res.status(400).json({error:"signup to add"});
        return;
    }
    try{
        let id = req.params.id;
        let targetStock = await Watchlist.findById(id);
        if(!targetStock){
            res.status(400).json({error:"no such stock exists in watchlist"})
            return;
        }else if(targetStock.userId.toString() !== req.user._id.toString()){
            res.status(400).json({error:"you are not allowed to delete this"})
            return;
        }
        let result = await Watchlist.findByIdAndDelete(id);
        if(!result){
            throw new Error("issue in deleting")
        }else{
            res.json({message:"deleted successfully!", result})
        }
    }catch(err){
        res.status(400).json({message: err.message})
    }
})



module.exports = router;