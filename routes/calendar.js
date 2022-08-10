var express = require('express');
var router = express.Router();
var calendarServices = require('../services/calendarServices');
var bookingService = require('../services/bookingServices');

router.get('/:month', function(req, res, next) {
    calendarServices.getMonthDays(req,res,next);
});

/* POST a new calendar day */
router.post('/', function(req, res, next) {
    calendarServices.createDay(req,res,next);
});

module.exports = router;