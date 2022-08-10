var bookingModel = require('../models/bookingsModel')
var userModel = require('../models/userModel')
var calendarModel = require('../models/calendarModel')

exports.book = function(req, res, next) {
    let telf = null;
    let name =  null;
    if (req.body.telf != '') telf = req.body.telf;
    if (req.body.name != '') telf = req.body.name;
    let data = {
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        email: req.body.email,
        name: name,
        telf: telf,
    }

    //Crear usuario en el caso de que no exista
    userModel.exists(data,req,res,next).then(results => {
        if (results.length == 0) {
            userModel.createUser(data,req,res,next) //Potser s'haurà de fer asycron //BUG: es crea quan hi ha error a l'hora de reservar
        }
        //Calcular coste
        calendarModel.calculateCost(data,req,res,next).then(results => {
        data.cost = JSON.parse(JSON.stringify(results[0])).cost_total.toFixed(2);
        //Crear reserva
        bookingModel.book(data,req,res,next);
    });   
    }) 
}


