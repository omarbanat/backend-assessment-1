const express = require("express");
const router = express.Router();

const {
  getAllMemes,
  getMemeByID,
  addMeme,
  updateMeme,
  deleteMeme,
} = require("../controller/memeController");

router.get("/getAll", getAllMemes);
router.get("/get/:ID", getMemeByID);
router.post("/add", addMeme);
router.put("/update/:ID", updateMeme);
router.delete("/delete/:ID", deleteMeme);

module.exports = router;
