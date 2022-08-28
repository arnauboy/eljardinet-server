var tarifesModel = require('../models/tarifesModel')

exports.getTarifes = function(req,res,next) {
    tarifesModel.getTarifes(req,res,next);
}

exports.createTarifa = function(req,res,next) {
    let data = {
        name: req.body.name,
        costPerNight: req.body.costPerNight,
        n_nights: req.body.n_nights
    }
    tarifesModel.createTarifa(data,req,res,next);
}

exports.updateTarifa = function(req,res,next) {
    let data = {
        costPerNight: req.body.costPerNight,
        n_nights: req.body.n_nights
    }
    tarifesModel.updateTarifa(data,req,res,next);
}