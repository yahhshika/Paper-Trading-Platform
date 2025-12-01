const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/User.js");
const getId = require("../middlewares/users/getUserInfo.js")
const SECRET_KEY = "yahhshika";



// add a user: 
router.post("/signup",[
    body('name','give a proper name').isLength({min : 3}),
    body('email', 'give a proper email').isEmail(),
    body('password','give password of min 8 characters').isLength({min:8})
],async (req,res)=>{
    
    const result = validationResult(req);
    if(result.errors.length){
        res.status(400).json({error: result.errors})
        return;
    }
    try{
        let user = await User.findOne({email: req.body.email});
        if(user){
            success = false;
            return res.json({success,error: "user with this email already exists"});
        }
        const salt = bcrypt.genSaltSync(10);
        const newpass = bcrypt.hashSync(req.body.password, salt);
        user = await User.create({...req.body, password: newpass});
        console.log(user)
        let data = {
            user:{
                _id: user._id
            }
        }
        let authToken = jwt.sign(data, SECRET_KEY);
        // console.log(authToken);
        res.json({authToken});
        
     
    }catch(err){
        res.status(400).json({error:err.message});
    }
})

router.post("/login",[
    body('password','give password of min 8 characters').isLength({min:8}),
    body('email', 'give a proper email').isEmail()
], async(req,res)=>{
    let success = true;
    let result = validationResult(req);
    if(result.errors.length){
        success = false;
        return res.status(400).json({success,error: result.errors});
    }
    try{

        let user = await User.findOne({email: req.body.email});
        if(!user){
            success = false;
            return res.status(400).json({success,error: "kindly add correct credentials for access"});
        }
        let matched = await bcrypt.compare(req.body.password,user.password);
        if(!matched){
            success = false
            return res.status(400).json({success,error: "kindly add correct credentials for access."});
        }
    
        // since now the user is valid, give it an auth-token
        let data = {
            user:{
                _id: user._id
            }
        }
        let authToken = jwt.sign(data, SECRET_KEY);
        // console.log(authToken);
        res.json({success,authToken});
    }catch(err){
        success = false
        res.status(400).json({success,error:err.message});
    }
})

router.get("/user",getId,async (req,res)=>{
    let success = true;
    try{
        let userid = req.user._id;
        // res.send(userid);
        let user = await User.findById(userid).select("-password")
        res.json({success,user});
    }catch(err){
        success = false
        res.status(400).json({success,error:err.message});
    }
})



module.exports = router;