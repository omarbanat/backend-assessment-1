const Meme = require('../models/Meme');
const {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytesResumable,
  } = require('firebase/storage');
  
  const storage = getStorage();


const getAllMemes = async (req, res) => {
    try {
      const meme = await Meme.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: meme,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
    };

  const getMemeByID = async (req, res) => {
    try {
      const meme = await Meme.findById(req.params.ID);

      if (!meme){
        return res.status(404).json({
          success: false,
          message: 'data not found',
        });
      }
      res.status(200).json({
        success: true,
        message: 'data retrieved successfully',
        data: meme,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };

  const getMemeByUserId = async (req, res) => {
    try {
      const userId = req.params.UserId; 
      const memes = await Meme.find({ UserId: userId });
      if (!memes) {
        return res.status(404).json({
          success: false,
          message: 'No memes found for the given UserId',
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'Memes retrieved successfully',
        data: memes,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unable to get memes by UserId',
        error: error,
      });
    }
  };

  // i did this so that in the front it takes the userId and gives us the opportunity to edit only on the data fetched by this api that are just his meme
  


  const addMeme = async (req, res) => {
    const  {MemeTitle , MemeCaption , UserId} = req.body;
    try {
     const image = await FileUpload(req.file); 
      const meme = new Meme({
        MemeTitle , 
        MemeCaption , 
        UserId,
        MemeImage: image.downloadURL, 
      });
  
      await meme.save();
  
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: meme,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Unable to add data',
        error: error.message,
      });
    }
  };

  const deleteMemeByID =  async (req, res) => {
    try {
      const meme = await Meme.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: meme,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
    };

    const updateMemeByID = async (req, res) => {
        try {
          const { MemeTitle, MemeCaption, UserName } = req.body;
          let memeFieldsToUpdate = {
            MemeTitle,
            MemeCaption,
            UserName,
          };
          
          if (req.file) {
            const image = await FileUpload(req.file);
            memeFieldsToUpdate.MemeImage = image.downloadURL;
          }
    
          const meme = await Meme.findByIdAndUpdate(req.params.ID, memeFieldsToUpdate, { new: true });
          
          if (!meme) {
            return res.status(404).json({
              success: false,
              message: 'Meme not found',
            });
          }
    
          res.status(200).json({
            success: true,
            message: 'Data updated successfully.',
            data: meme,
          });
        } catch (error) {
          console.error(error);
          res.status(400).json({
            success: false,
            message: 'Unable to update data',
            error: error.message,
          });
        }
      };
    

  const FileUpload = async (file) => {
    const dateTime = giveCurrentDateTime();
    
      const storageRef = ref(
        storage,
         `files/${file.originalname + '       ' + dateTime}`
      );
    
      const metadata = {
        contentType: file.mimetype,
      };
    
      const snapshot = await uploadBytesResumable(
        storageRef,
        file.buffer,
        metadata
      );
     
      const downloadURL = await getDownloadURL(snapshot.ref);
    
      console.log('File successfully uploaded.');
      return {
        message: 'file uploaded to firebase storage',
        name: file.originalname,
        type: file.mimetype,
        downloadURL: downloadURL,
      };
    };
    
    const giveCurrentDateTime = () => {
      const today = new Date();
      const date =
        today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      const dateTime = date + ' ' + time;
      return dateTime;
    };

  module.exports = {
    getAllMemes,
    getMemeByID ,
    addMeme,
    deleteMemeByID,
    updateMemeByID ,
    getMemeByUserId,
  };
