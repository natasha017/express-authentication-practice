import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const register=async(req,res)=>{
    return res.render("register")
}
const home=async(req,res)=>{
    return res.render("home")
}
const login=async(req,res)=>{
    return res.render("login")
}
const create=async(req,res)=>{
   const {username,email,password,age}=req.body
   const userExists=await User.findOne({email})
   if(userExists){
    return res.status(400).json({message:"Email Already Exists"})
   }
   
   bcrypt.genSalt(10,async(error,salt)=>{
    await bcrypt.hash(password,salt,async(error,hash)=>{
      const user=await User.create({username,email,password:hash,age})
      const token=jwt.sign({email},"secret")
      res.cookie("token",token)
      return res.status(201).json({message:"Register Successfully"})
    })
   })
  
}
const createLogin=async(req,res)=>{
   const {email,password}=req.body
   const user=await User.findOne({email})
   if(!user){
    return res.status(400).json({message:"Invalid Credentail"})
   }

   const isMatch=await bcrypt.compare(password,user.password)
   if(!isMatch){
    return res.status(400).json({message:"Invalid Credentail"})
   }
   
   const token =jwt.sign({email},"secret")
   res.cookie("token",token)
   return res.status(200).json({message:"Login SuccessFully"})
}
const logout=async(req,res)=>{
  res.clearCookie("token")
  return res.status(200).json({message:"Logout Successfully"})
}

const controllers={
    register,
    home,
    login,
    create,
    createLogin,
    logout
}
export default controllers