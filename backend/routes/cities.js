const express = require("express");
const {
  getCities,
  getCity,
  addCity,
  deleteCity,
} = require("../controllers/citiesController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.get("/", getCities);

router.use("/:id", getCity);

router.post("/", addCity);

router.delete(":/id", deleteCity);

module.exports = router;
