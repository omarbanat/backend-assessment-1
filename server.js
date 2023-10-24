const express = require("express");
const connectToDatabase = require("./config/db");
// import 
const app = express();
const PORT = 5000;

const memeRoute = require("./routes/memeRoute");

app.use("/memes" , memeRoute);


app.listen(PORT, () => {
  connectToDatabase()
    .then(() => console.log("Connect To Database"))
    .catch((err) => console.log(err));
  console.log(`Server is running on http://localhost:${PORT}`);
});
