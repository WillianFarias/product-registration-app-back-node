const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host="localhost",
  user="root",
  password="will17",
  database="movie_review"
});

app.listen(3001, () => {
  console.log("running on port 3001");
});