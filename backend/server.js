require("dotenv").config({ path: "../.env" });

const mysql = require("mysql");
const userRoutes = require("./routes/user");
const express = require("express");
const app = express();

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.SERVER_SIDE_PASSWORD,
  database: process.env.SERVER_SIDE_DATABASE,
});

const userSchema = `CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
)`;

conn.query(userSchema, function (err, res, fields) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("UserTable created successfully!");
  }
});

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  console.log("hello world");
});

app.get("/hello", (req, res) => {
  req.headers.accept = "application/json";
  conn.query("SELECT * FROM users", (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    res.status(200).json(rows);
  });
});

app.listen(process.env.SERVER_SIDE_PORT);
