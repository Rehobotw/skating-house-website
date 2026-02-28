const { getAllContent, updateSection: updateAboutService } = require("../services/aboutService");

exports.getAll=async(req,res,next)=>{
    try{
        const items=await getAllContent();
        res.json(items);
    }catch(err){
        next(err);
    }
};

exports.updateSection=async(req,res,next)=>{
    try{
        const {title}=req.params;
        const{content}=req.body;
        const updated=await updateAboutService(title, content);
        res.json(updated);
    }catch(err){
        next(err);
    }
};