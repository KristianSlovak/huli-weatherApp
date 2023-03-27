const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citiesSchema = new Schema({
  cityName: {
    type: String,
    required: true,
  },
  cityCountry: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("City", citiesSchema);
