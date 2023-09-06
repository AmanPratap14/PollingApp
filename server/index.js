const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB  (Default: mongodb://localhost/): vote
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));


// Load routes
const userRoutes = require("./routes/userRoutes");
const pollRoutes = require("./routes/pollRoutes");
const voteRoutes = require("./routes/voteRoutes");

// Use routes
app.use("/", userRoutes);
app.use("/", pollRoutes);
app.use("/", voteRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
