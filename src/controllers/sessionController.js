const { getAllContent,updateSection, } = require("../services/sessionService");

exports.getAll=async(req,res,next)=>{
    try{
        const items=await getAllContent();
        res.json(items);
    }catch(err){
        next(err);
    }
};

exports.update=async(req,res,next)=>{
    try{
        const {title, content } = req.body;
        const updated = await updateSection(title,content);
        res.json(updated);
    }catch(err){
        next(err);
    }
};