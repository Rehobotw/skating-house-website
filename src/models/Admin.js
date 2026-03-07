const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

// Define the fields that an admin should have so Mongoose
// actually persists email and password to the database.
const AdminSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
            minlength:6,
        },
    },
    {
        timestamps:true,
    }
);

AdminSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next();
    try{
        const salt=await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password, salt);
        return next();
    }catch(err){
        return next(err);
    }
});

AdminSchema.methods.comparePassword=function(candidate){
    return bcrypt.compare(candidate, this.password);
};

module.exports=mongoose.model('Admin',AdminSchema);
