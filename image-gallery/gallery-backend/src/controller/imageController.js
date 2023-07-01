import Image from "../models/imageModel.js";

export const addImage = async (req, res) => {
  console.log(req.body);

  try {
    console.log("reqfile>>>>", req.file);
    if (req.file) {
      req.body.image =
        "http://192.168.1.50:5000/images/" + req.file.originalname;
    }

    const imagedata = new Image(req.body);

    const saveImage = await imagedata.save();

    return res.status(200).json({ saveImage });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const getImage = async (req, res) => {
  try {
    const allImages = await Image.find({});

    return res.status(200).json({ allImages });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const deleteImage = async (req, res) => {
  console.log(req.params);

  try {
    const deletedemployee = await Image.findOneAndDelete({
      _id: req.params.id,
    });
    console.log(deletedemployee);
    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
