const mongoose=require("mongoose");

const FooterSchema=new mongoose.Schema({
    socialLinks:{
        facebook:String,
        tiktok:String,
        telegram:String,
    }
},{timestamps:true});

module.exports=mongoose.model('Footer',FooterSchema);