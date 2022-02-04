const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tacoSchema = new Schema({
  shell: {
    type: String,
  },
  protein: {
    type: String,
  },
  spiceLevel: {
    type: [String],
    enum: ["mild", "medium", "hot"],
  },
});

const Taco = mongoose.model("Taco", tacoSchema);

module.exports = Taco;
