import express from "express";
import mongoose from "mongoose";

  (async ()=>{
     const connectionInstance = await mongoose.connect('mongodb+srv://sachinyadav0123321_db_user:5xGANFkP54hzDbeS@mucluster1.jbyiq9m.mongodb.net/')
       
    console.log(connectionInstance.connection.host); 
  })()

  
const app = express();

  app.post("/create-user", (req, res) => {
    res.send("Hello, World!");
  })

  // data defination
  const userSchema = mongoose.Schema({
    name:String,
    age:Number
  })




  app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
  })