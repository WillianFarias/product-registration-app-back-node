const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "will17",
  database: "crud"
})

app.post("/api/insert", (req, res) => {
  const sqlInsert = 
    "INSERT INTO movie_review (movieName, movieReview) VALUES (?, ?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {});
});