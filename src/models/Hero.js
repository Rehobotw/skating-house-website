const mongoose=require('mongoose');

// Hero is a single content block stored in MongoDB
const HeroSchema=new mongoose.Schema({
    title:{type:String},
    content:{type:String}
},{timestamps:true});

module.exports=mongoose.model('Hero',HeroSchema);