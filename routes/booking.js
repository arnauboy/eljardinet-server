var express = require('express');
var router = express.Router();
var bookingService = require('../services/bookingServices');

/* GET a booking */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* POST a new booking */
router.post('/', function(req, res, next) {
    bookingService.book(req,res,next);
});
  
module.exports = router;