const mongoose=require('mongoose');

const AboutSchema=new mongoose.Schema({
    content:{type:String}
},{timestamps:true});

module.exports=mongoose.model('About',AboutSchema);