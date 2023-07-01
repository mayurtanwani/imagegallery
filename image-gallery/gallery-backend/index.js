import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import imageRouter from "./src/routes/imageRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));
app.use(imageRouter);

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("error");
  });

app.listen(process.env.PORT, () => {
  console.log(`server is runnning at port ${process.env.PORT}`);
});
