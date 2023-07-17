const router = require("express").Router();
const multer = require("multer");
const { storage } = require("../api/image");
const upload = multer({ storage: storage });
const Tree = require("../models/tree");
const copyPaste = require("copy-paste");

const addTree = async (req, res) => {
  const { Name, Species, Benefits, Latitude, Longitude, Images } = req.body;
  // console.log( Name, Species, Benefits, Latitude, Longitude, Images);
  try {
    const tree = new Tree({
      Name,
      Species,
      Benefits,
    });
    console.log(req.files);
    try {
      tree.imageurl = req.files[0].path;
      tree.name = req.files[0].filename;
      console.log(tree);
      await tree.save();
      copyPaste.copy(tree.imageurl, () => {
        console.log("Image URL copied to clipboard:", tree.imageurl);
      });
      res.json({});
    } catch (error) {
      await tree.save();
      res.json({});
    }
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

const getTree = async (req, res) => {
  try {
    const tree = await Tree.find({});
    res.send(tree);
  } catch (error) {
    res.send(error);
  }
};

router
  .post("/add-tree", upload.array("image"), addTree)
  .get("/get-tree", getTree);
module.exports = router;
