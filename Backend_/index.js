const express =require("express");
const mongoose =require("mongoose");
const cors= require("cors");
const path = require ("path");

console.log(__dirname);
const app = express();
app.use(express.json());
const userRoute = require('./routes/Userapi')
const productRoute = require('./routes/Product')
const PORT = 5000;
// const uri = 'mongodb+srv://samikshanavale43:Samiksha@cluelesscoders.zeaot.mongodb.net/?retryWrites=true&w=majority&appName=cluelesscoders'
const uri = 'mongodb+srv://samikshanavale43:Samiksha@cluelesscoders.zeaot.mongodb.net/?retryWrites=true&w=majority&appName=CluelessCoders/VJTIOLX'

// routes
app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log("MongoDB not connected", err);
    process.exit(1); // Exit process with failure
  }
};
connectDB();

app.use('/api',userRoute)
app.use('/api/p1',productRoute)




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })

