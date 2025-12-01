const express = require("express");
const router = express.Router();
const AllMarketData = require("../models/AllMarketData")
const getId = require("../middlewares/users/getUserInfo")

router.get("/",getId,async(req,res)=>{
    if(!req.user._id){
        res.status(400).json({error:"login/signup to add"})
        return;
    }
    try{

        let result = await AllMarketData.find({});
        if(!result){
            res.status(400).json({error:"no market data available"});
            return;
        }
        res.json({message:"all market data fetched", result})
    }catch(err){
        res.status(400).json({error:err.message})
    }
})


module.exports = router;