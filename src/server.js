  import express from "express";
  import mongoose from "mongoose";
  // import dotenv from "dotenv";
  import cors from "cors";
  import path from 'path';
  
  import FiiRoute from "./routes/fii.js";
  
  const app = express();
  // dotenv.config();

  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
      console.log("DB Connection ERROR!", err);
    });

  app.get("/", async (req, res) => {
    // res.status(200).json("test is successfull!");
    res.status(200).sendFile(path.join(process.cwd(), "test.json"));
  });
  app.use(cors());
  app.use(express.json());

  // New routes
  app.use("/api/fii", FiiRoute);

  const port = process.env.PORT || 5000;
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Backend server is running on ${port}!`);
  });
