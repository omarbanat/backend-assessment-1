const express = require("express");
const router = express.Router();
const memeController = require("../controllers/memeController");
router.get("/getAllMemes", memeController.getAllMemes);
// router.get("/getMeme/:id", memeController.getMemeById);
router.post("/addMeme", memeController.addMeme);
router.delete("/deleteMeme/:id", memeController.deleteMeme); // Include ':id' to specify which meme to delete
router.put("/updateMeme/:id", memeController.updateMeme); // Include ':id' to specify which meme to update
module.exports = router;
