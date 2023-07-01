import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
  },

  image: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model("image", imageSchema);

export default Image;
