const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const memberRoutes = require("./routes/members");
const taskRoutes = require("./routes/tasks");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/api/members", memberRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
