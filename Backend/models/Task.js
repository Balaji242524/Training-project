const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  desc: String,
  assignedTo: String,
  status: { type: String, default: "To Do" }
});

module.exports = mongoose.model("Task", taskSchema);
