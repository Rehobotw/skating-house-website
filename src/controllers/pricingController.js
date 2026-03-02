const { getActivePricing, updatePricing } = require("../services/pricingService");

exports.getAll=async(req,res,next)=>{
    try{
        const items = await getActivePricing();
        res.json(items);
    }catch(e){
        next(e);
    }
};

exports.update=async(req,res,next)=>{
    try{
        // const{id}=req.params;
        const updated=await updatePricing(req.body);
        res.json(updated);
    }catch(e){
        next(e);
    }
}