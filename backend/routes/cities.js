const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
  getCities,
  getCity,
  addCity,
  deleteCity,
} = require("../controllers/citiesController");

const router = express.Router();

router.use(requireAuth);

router.get("/", getCities);

router.get("/:id", getCity);

router.post("/", addCity);

router.delete("/:id", deleteCity);

module.exports = router;
