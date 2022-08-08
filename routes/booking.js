var express = require('express');
var router = express.Router();
var con = require('../utils/database')

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* POST a new booking */
router.post('/', function(req, res, next) {
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let cost = req.body.cost;
    
    const query = `INSERT INTO bookings (start_date,end_date,cost) VALUES(${start_date}, ${end_date}, ${cost});`;
    con.query(query, (error, results) => {
        if (error) {
          console.log(error);
          res.status(400).send("Booking error")
        } else {
          console.log(results);
          res.status(200).send("Booking created correctly")
        }
      });
});
  
  module.exports = router;