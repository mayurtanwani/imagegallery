import express from "express";
import upload from "../middleware/multer.js";
import {
  addImage,
  deleteImage,
  getImage,
} from "../controller/imageController.js";

const imageRouter = express.Router();

imageRouter.post("/image", upload.single("image"), addImage);
imageRouter.get("/image", getImage);
imageRouter.delete("/image/:id", deleteImage);

export default imageRouter;
