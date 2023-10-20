const express = require("express");
const connectToDatabase = require("./config/db.jsx");
const app = express();
const PORT = 5000;
require("dotenv").config();
const memeRoute = require("./routes/memeRoute");
app.use("/memes", memeRoute);

app.listen(PORT, () => {
  connectToDatabase()
    .then(() => console.log("success"))
    .catch((err) => console.log(err));
  console.log(`Server is running on http://localhost:${PORT}`);
});
