var con = require('../utils/database.js')


exports.book = function(data,req,res,next) {

  //Comprovar que no hi hagi solapaments
    const queryConstraint = `SELECT * FROM bookings WHERE ((start_date <= ${data.start_date} AND end_date > ${data.start_date}) OR (start_date < ${data.end_date} AND end_date >= ${data.end_date})) OR (start_date >= ${data.start_date} AND end_date <= ${data.end_date}) `;
    con.query(queryConstraint, (error, results) => {
      if (error) {
        console.log(error);
        res.status(400).send("Booking error")
      } else {
        if (results.length == 0) {
          const query = `INSERT INTO bookings (email,start_date,end_date,cost) VALUES(${data.email}, ${data.start_date}, ${data.end_date}, ${data.cost});`;
          con.query(query, (error, results) => {
            if (error) {
              console.log(error);
              res.status(400).send("Booking error")
            } else {
              res.status(200).send("Booking created correctly")
            }
          });
        }
        else res.status(400).send("Days already booked")
      }
    });
}