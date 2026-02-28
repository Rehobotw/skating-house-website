const { getAllContent, updateFooterService } = require("../services/footerService");

exports.getAll=async(req,res,next)=>{
    try{
        const data=await getAllContent();
        res.json(data||{});
    }catch(e){
        next(e);
    }
};

exports.update=async(req,res,next)=>{
    try{
        const updated=await updateFooterService(req.body);
        res.json(updated);
    }catch(e){
        next(e);
    }
};