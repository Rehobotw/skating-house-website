const { getAllContent, updateSection: updateSectionService } = require("../services/contentService");

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
        const {section}=req.params;
        const{content}=req.body;
        const updated=await updateSectionService(section, content);
        res.json(updated);
    }catch(err){
        next(err);
    }
};