var mysql = require('mysql');
require('dotenv').config({ path: '../secrets.env' });


var con = mysql.createConnection({
  host: "localhost",
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE eljardinetdb", function (err, result) {
  if (err) throw err;
    console.log("Database created");
  });
});



