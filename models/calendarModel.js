var con = require('../utils/database.js')

exports.dayExists = function (data,req,res,next) {

    return new Promise(function(resolve, reject) {
      const query = `SELECT * FROM calendar WHERE date=${data.date};`;
        con.query(query, (error, results) => {
          if (error) {
          console.log(error);
          res.status(400).send("Checking day error")
          } else resolve(results);
        });
      });
}

exports.createDay = function (data,req,res,next) {
    const query = `INSERT INTO calendar (date,cost) VALUES(${data.date}, ${data.cost});`;

    con.query(query, (error, results) => {
        if (error) {
          console.log(error);
          res.status(400).send("Creating day error")
        } else {
          console.log(results);
          res.status(200).send("Day created correctly")
        }
      });
}

exports.updateDay = function (data,req,res,next) {
    const query = `UPDATE calendar SET cost = ${data.cost} WHERE date = ${data.date};`

    con.query(query, (error, results) => {
        if (error) {
          console.log(error);
          res.status(400).send("Updating day error")
        } else {
          console.log(results);
          res.status(200).send("Day updated correctly")
        }
      });
}

exports.calculateCost = function(data,req,res,next) {
  const query = `SELECT SUM(cost) AS cost_total FROM calendar WHERE date >= ${data.start_date} AND date <= ${data.end_date}`;

  return new Promise(function(resolve, reject) {
    return con.query(query, (error, results) => {
      if (error) {
        res.status(400).send("Calculating cost error")
      } else {
        resolve( results);
      }
    });
  });
}