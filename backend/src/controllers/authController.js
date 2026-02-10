const jwt=require("jsonwebtoken");
const Admin=require("../models/Admin");

exports.login=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const admin=await Admin.findOne({email});

        if(!admin) 
            return res.status(401).json({error:"Invalid credentials"});
        
        const token=jwt.sign({id:admin._id},process.env.JWT_SECRET,{expiresIn:"8h"});
        res.json({token});
    }
    catch(err){
        next(err);
    }   
};