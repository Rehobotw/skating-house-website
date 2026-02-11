const { getContactInfo, updateContactInfo } = require("../services/contactService");

exports.get=async(req,res,next)=>{
    try{
        const data=await getContactInfo();
        res.json(data||{});
    }catch(e){
        next(e);
    }
};

exports.update=async(req,res,next)=>{
    try{
        const updated=await updateContactInfo(req.body);
        res.json(updated);
    }catch(e){
        next(e);
    }
};
