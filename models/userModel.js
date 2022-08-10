var con = require('../utils/database.js')

exports.createUser = function(data,req,res,next) {
    const query = `INSERT INTO users (name,email,telf) VALUES(${data.name}, ${data.email}, ${data.telf});`;
    con.query(query, (error, results) => {
        if (error) {
          console.log(error);
          res.status(400).send("Creating user error")
        }
      });
}

exports.exists = function(data,req,res,next) {
    const query = `SELECT * FROM users WHERE email=${data.email};`;

    return new Promise(function(resolve, reject) {

      return con.query(query, (error, results) => {
          if (error) {
            console.log(error);
            res.status(400).send("Checking user error")
          } 
          else {
            resolve(results);
          }
        });
      });
}

