const Pricing=require("../models/Pricing");

exports.getAll=async(req,res,next)=>{
    try{
        res.json(await Pricing.find({active:true}));
    }catch(e){
        next(e);
    }
};

exports.update=async(req,res,next)=>{
    try{
        const{id}=req.params;
        const update=await Pricing.findByIdAndUpdate(id,req.body,{new:true});
        res.json(update);
    }catch(e){
        next(e);
    }
}