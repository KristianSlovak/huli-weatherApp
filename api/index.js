require("dotenv").config({ path: "../.env" });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cityRoutes = require("./routes/cities");

const app = express();

app.use(
  cors({
    origin: process.env.SERVER_SIDE_FRONTEND_APP,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: true,
  })
);

app.options("*", cors());

app.use(express.json());

app.use("/api/user", userRoutes);

app.use("/api/cities", cityRoutes);

mongoose
  .connect(process.env.SERVER_SIDE_CONNECTION)
  .then(() => {
    app.listen(process.env.SERVER_SIDE_PORT, () => {
      console.log(
        "connected to db & listening to port",
        process.env.SERVER_SIDE_PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
