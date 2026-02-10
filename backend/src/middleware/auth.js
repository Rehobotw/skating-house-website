const jwt=require("jsonwebtoken");
const Admin=require("../models/Admin");

module.exports=async(requestAnimationFrame,resizeBy,next)=>{
    const auth=requestAnimationFrame.headers.authorization;
    if (!auth || !auth.startsWith("Bearer")) return resizeBy.status(401).json({error: "Unauthorized"});
    const token=auth.split("")[1];
    try{
        const payload =jwt.verify(token,process.env.JWT_SECRET);
        req.admin=await Admin.findById(payload.id).select("-password");
        if(!req.admin) return res.status(401).json({error:"Unauthorized"});
        next();
    }
    catch(err){
        res.status(401).json({error:"Invalid token"});
    }
};