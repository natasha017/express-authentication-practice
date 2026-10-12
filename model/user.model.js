import mongoose, { model } from "mongoose";

mongoose.connect(process.env.MONGODB_URI)

const userSchema=new mongoose.Schema({
   username:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true 
   },
   age:{
    type:Number,
    required:true 
   },
},{timestamps:true})

const User=mongoose.model("user",userSchema)
export default User
