const SiteContent=require("../models/SiteContent");

exports.getAll=async(req,res,next)=>{
    try{
        const items=await SiteContent.find({});
        res.json(items);
    }catch(err){
        next(err);
    }
};

exports.updateSection=async(req,res,next)=>{
    try{
        const {section}=req.params;
        const{content}=req.body;
        const updated=await SiteContent.findOneAndUpdate(
            {section},
            {content,updatedAt:Date.now()},
            {upsert:true, new:true}
        );
        res.json(updated);
    }catch(err){
        next(err);
    }
};