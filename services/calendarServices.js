var calendarModel = require('../models/calendarModel')

exports.getMonthDays = function(req,res,next) {
    let month = req.param("month");
    if (month > 12 || month < 1) res.status(400).send("Wrong month")
    else {
        calendarModel.getMonthDays(month,req,res,next);
    }
}

exports.createDay = function(req,res,next) {
    if (req.body.cost < 0) {
        res.status(400).send("El preu ha de ser positiu");
    }
    else {
        let data = {
            date: req.body.date,
            cost: req.body.cost
        }
        calendarModel.dayExists(data,req,res,next).then(results => {
            if(results.length != 0){
                calendarModel.updateDay(data,req,res,next);
            }
            else {
                calendarModel.createDay(data,req,res,next);
            }
        });
    }
}