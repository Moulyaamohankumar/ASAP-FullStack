const mongoose = require("mongoose");

const EntitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Add created_by reference
});

module.exports = mongoose.model("Entity", EntitySchema);
