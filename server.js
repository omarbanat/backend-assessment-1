require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const dbConnection = require('./config/db');
const axios = require('axios');

const userRoute = require('./routers/userRoute');
const memeRouter = require('./routers/memeRouter');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/users', userRoute);
app.use('/meme', memeRouter);

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
      const apiKey = '83342237eeb1faeb63a4c76bbafef147';
      const formData = new FormData()
      formData.append('key', apiKey)
      const image = req.file.buffer.toString('base64');
      formData.append('image', image)

      const response = await axios.post('https://api.imgbb.com/1/upload', formData);

      if (response.data.status === 200) {
          const imageUrl = response.data.data.url;
          console.log('Image uploaded successfully:', imageUrl);
          res.json({ imageUrl });
      } else {
          console.error('ImgBB API Error:', response.data.status_txt);
          res.status(500).json({ error: 'batoul--Error uploading the file' });
      }
  } catch (error) {
      console.error('Internal Server Error:', error);
      res.status(500).json({ error: 'Error uploading the file' });
  }
});



app.listen(port, () => {
  dbConnection()
    .then(() => console.log('woohoo Connected successfully'))
    .catch((err) => console.log(err));
  console.log(`App listening on port ${port}`);
});