const ContactInfo=require("../models/ContactInfo");

exports.get=async(req,res,next)=>{
    try{
        const data=await ContactInfo.findOne({});
        res.json(data||{});
    }catch(e){
        next(e);
    }
};

exports.update=async(req,res,next)=>{
    try{
        const updated=await ContactInfo.findOneAndUpdate({},req.body,{upsert:true,new:true});
        res.json(updated);
    }catch(e){
        next(e);
    }
};
