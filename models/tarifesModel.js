var con = require('../utils/database.js')

exports.getTarifes = function(req,res,next) {
    const query = "SELECT * FROM tarifes";
    con.query(query, (error, results) => {
      if (error) {
        console.log(error);
        res.status(400).send("Fetching tarifes error")
      } else {
        res.status(200).send(results);
      }
    });
}

exports.createTarifa = function(data,req,res,next) {
  const query = `INSERT INTO tarifes (name,costPerNight,n_nights) VALUES(${data.name}, ${data.costPerNight}, ${data.n_nights});`;

    con.query(query, (error, results) => {
        if (error) {
          console.log(error);
          res.status(400).send("Creating tarifa error")
        } else {
          console.log(results);
          res.status(200).send("Tarifa created correctly")
        }
      });
}

exports.updateTarifa = function(data,req,res,next) {
  const query = `UPDATE tarifes SET costPerNight = ${data.costPerNight} WHERE n_nights = ${data.n_nights};`
    con.query(query, (error, results) => {
        if (error) {
          console.log(error);
          res.status(400).send("Updating tarifa error")
        } else {
          console.log(results);
          res.status(200).send("Tarifa updated correctly")
        }
      });
}