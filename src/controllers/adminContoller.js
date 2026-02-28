const Admin=require("../models/Admin");

exports.getAll=async(req,res,next)=>{
    try{
        const items=await Admin.find({});
        res.json(items);
    }catch(err){
        next(err);
    }
};

exports.updatePassword=async(req,res,next)=>{
    try{
        const {email}=req.params;
        const{password}=req.body;
        const updated=await Admin.findOneAndUpdate(
            {email},
            {password,updatedAt:Date.now()},
            {upsert:true, new:true}
        );
        res.json(updatePassword);
    }catch(err){
        next(err);
    }
};


