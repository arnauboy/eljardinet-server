var mysql = require('mysql');
require('dotenv').config({ path: '../secrets.env' });

var con = mysql.createConnection({
  host: "localhost",
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DROP TABLE tarifes;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table tarifes dropped");
  });

   var sql = "DROP TABLE bookings;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table bookings dropped");
  });

  var sql = "DROP TABLE users;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table users dropped");
  });

  var sql = "DROP TABLE calendar;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table calendar dropped");
  });
});

