const Meme = require("../models/memeModel");

const getAllMemes = async (req, res) => {
  try {
    const memes = await Meme.find();
    res.json(memes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMemeByID = async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({ msg: "Meme not found" });
    }

    res.json(meme);
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Meme not found" });
    }

    res.status(500).send("Server Error");
  }
};

const addMeme = async (req, res) => {
  try {
    const newMeme = new Meme({
      title: req.body.title,
      image: req.body.image,
      tags: req.body.tags,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    //   Linked the meme to the logged-in user
    });

    await newMeme.save();
    res.status(200).json({ message: "A meme was added successfully!", newMeme});
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
// const addMeme = async (req, res) => {
//     try {
//       const user = req.user; // Assuming user is logged in and available in the request object
//         const _id=user._id;
//       const newMeme = new Meme({
//         title: req.body.title,
//         image: req.body.image,
//         tags: req.body.tags,
//         createdAt: req.body.createdAt,
//         updatedAt: req.body.updatedAt,
//         creator: user._id // Link the meme to the logged-in user
//       });
  
//       await newMeme.save();
      
      // Update user's memes array with the new meme
    //   user.memes.push(newMeme);
    //   await user.save();
  
//       res.status(200).json({ message: "A meme was added successfully!", newMeme });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   };
  


const deleteMeme = async (req, res) => {
  const memeId = req.params.id;
  try {
    const result = await Meme.findByIdAndDelete(memeId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Meme not found",
      });
    }

    res.json({
      success: true,
      message: "Meme deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to delete meme",
      error: error.message,
    });
  }
};

const updateMeme = async (req, res) => {
  try {
    const memeId = req.params.id;
    const updatedMeme = {
        title: req.body.title,
        image: req.body.image,
        tags: req.body.tags,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    };

    const result = await Meme.findByIdAndUpdate(memeId, updatedMeme, { new: true });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Meme not found",
      });
    }

    res.json({
      success: true,
      message: "Meme updated successfully",
      updatedExperience: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to update meme",
      error: error.message,
    });
  }
};

module.exports = {
  getAllMemes,
  getMemeByID,
  addMeme,
  deleteMeme,
  updateMeme
};
