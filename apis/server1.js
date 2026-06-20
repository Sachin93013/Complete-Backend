import express from "express";
import mongoose from "mongoose";

const app = express();

  app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

  app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
  })