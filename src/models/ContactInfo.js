const mongoose=require("mongoose");

const ContactInfoSchema=new mongoose.Schema({
   socialLinks:{
        facebook:String,
        tiktok:String,
        telegram:String
   },
   contactAddress:{
        phone:{type:String},
        address:{type:String},
        googleMapLink:{type:String}
   }  
},{timestamps:true});

module.exports=mongoose.model("ContactInfo",ContactInfoSchema)