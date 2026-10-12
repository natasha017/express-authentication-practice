import dotenv from "dotenv"
dotenv.config()
import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
//server
const app=express()
const PORT=process.env.PORT
//ejs
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
//router
app.use("/",userRouter)
//serverStart
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
});
