const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:String,
    phone:Number
})

module.exports=mongoose.model("User",userSchema)