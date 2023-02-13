const express = require("express");
const cors = require("cors");
const gameRoutes = require("./routes/game");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/game", gameRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
