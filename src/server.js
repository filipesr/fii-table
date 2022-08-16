  import express from "express";
  import mongoose from "mongoose";
  // import dotenv from "dotenv";
  import cors from "cors";
  import path from 'path';
  
  import FiiRoute from "./routes/fii.js";
  
  const app = express();
  // dotenv.config();

  const dbMSG = mongoose
    .connect(process.env.MONGO_URL)
    .then({err: false, msg: "DB Connection Successfull!"})
    .catch((err) => { msg: "DB Connection ERROR!", err });

  app.get("/", async (req, res) => {
    // res.status(200).json("test is successfull!");
    res.status(200).sendFile(dbMSG.err ? dbMSG : path.join(process.cwd(), "test.json"));
  });
  app.use(cors());
  app.use(express.json());

  // New routes
  app.use("/api/fii", FiiRoute);

  const port = process.env.PORT || 5000;
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Backend server is running on ${port}!`);
  });
