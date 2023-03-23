require("dotenv").config({ path: "../.env" });

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cityRoutes = require("./routes/cities");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

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
