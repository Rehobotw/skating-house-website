const mongoose=require("mongoose");

const ContactInfoSchema=new mongoose.Schema({
   socialLinks:{
        facebook:String,
        tiktok:String,
        telegram:String
   },
   contactAddress:{
        phone:String,
        address:String,
        googleMapLink:String
   }  
},{timestamps:true});

module.exports=mongoose.model("ContactInfo",ContactInfoSchema)