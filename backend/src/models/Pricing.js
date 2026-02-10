const mongoose=require("mongoose");

const PricingSchema=new mongoose.Schema({
    title:{type:String, required:true},
    price:{type:Number, required:true},
    features:[String],
    active:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now}
});

module.exports=mongoose.model('Pricing',PricingSchema);