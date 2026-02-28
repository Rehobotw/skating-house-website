const mongoose=require("mongoose");

const PricingSchema=new mongoose.Schema({
    basic:{
        title:String,
        body:String,
        price:String},
    premium:{
        title:String,
        body:String,
        price:String},
    family:{
        title:String,
        body:String,
        price:String}
},{timestamps:true});

module.exports=mongoose.model('Pricing',PricingSchema);