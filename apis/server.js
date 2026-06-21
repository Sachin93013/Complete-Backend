import express from "express";
import mongoose from "mongoose";\
import dotenv from "dotenv";


dotenv.config();
mongoose.connect(process.env.MONGO_URI);

(async () => {
  const connectionInstance = await mongoose.connect(
    process.env.MONGO_URI,
  );

  console.log(connectionInstance.connection.host);
})();

const app = express();

app.use(express.json());


// data defination
const userSchema = mongoose.Schema({
  name: String, 
  age: Number,
});

// create collection
const userCollection = mongoose.model("user", userSchema);

// create api to create user
app.post("/create-user", async (req, res) => {
     const userData = req.body
  const createdUser = await userCollection.create(userData);
  res.send({
    "createdUser" : createdUser
  });
});

// read api to get all users
app.get('/get-all-users', async (req, res) => {
   const users = await userCollection.find()
   res.send(users)
})

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});  
  