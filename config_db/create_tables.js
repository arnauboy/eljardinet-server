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

  var sql = "CREATE TABLE calendar (date DATE NOT NULL, cost FLOAT(7,2) NOT NULL, PRIMARY KEY(date))"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table calendar created");
  });

  var sql = "CREATE TABLE users (name VARCHAR(255), email VARCHAR(255) NOT NULL, telf VARCHAR(255), PRIMARY KEY (email))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table users created");
  });

  var sql = "CREATE TABLE bookings (id int AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, cost FLOAT(7,2) NOT NULL," + 
    "PRIMARY KEY (id),  FOREIGN KEY (email) REFERENCES users(email), FOREIGN KEY (start_date) REFERENCES calendar(date), FOREIGN KEY (end_date) REFERENCES calendar(date), CONSTRAINT CHECK (start_date < end_date), UNIQUE (start_date,end_date))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table bookings created");
  });

  var sql = "CREATE TABLE tarifes (name VARCHAR(255) NOT NULL, costPerNight FLOAT(7,2) NOT NULL, n_nights int, PRIMARY KEY (n_nights))"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table tarifes created");
  });
});

