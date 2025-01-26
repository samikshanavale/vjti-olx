import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const uri = 'mongodb+srv://samikshanavale43:Samiksha@cluelesscoders.zeaot.mongodb.net/'

app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

  mongoose.connect(uri, {
    dbName: "VJTIOLX",
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })

