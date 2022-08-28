var express = require('express');
var router = express.Router();
var tarifesServices = require('../services/tarifesServices');

/* GET tarifes listing. */
router.get('/', function(req, res, next) {
  tarifesServices.getTarifes(req,res,next);
});

/* PPST a new tarifa */
router.post('/', function(req, res, next) {
  tarifesServices.createTarifa(req,res,next);
});

/* PPST a new tarifa */
router.put('/', function(req, res, next) {
  tarifesServices.updateTarifa(req,res,next);
});

module.exports = router;