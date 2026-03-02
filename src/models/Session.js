const mongoose=require('mongoose');

// Session content is stored as a single block in MongoDB
const SessionSchema=new mongoose.Schema({
    title:{type:String},
    content:{type:String}
},{timestamps:true});

module.exports=mongoose.model('Session',SessionSchema);