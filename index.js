import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDB from "./db/config.js";
const PORT = process.env.PORT || 3000;
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
  })
);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  