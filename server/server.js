// Common Js
// const express = require('express');

// Module
import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.send([
        {
            name: "sachin yadav",
            age : 22
        },
        {
            name: "roshan",
            age: 23,
        }
    ])
})

  app.get('/contact', (req, res)=>{
    res.send("Contact page")
  })

  app.get('/about', (req, res)=>{
    res.send("About page")
  })

  app.post("/create-user", (req, res)=>{
    console.log(req.body)
    res.send("User created successfully")
  })

 app.listen(8000, ()=>{
    console.log("server running on http://localhost:8000");
 })