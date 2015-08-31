var express = require('express');
var router = express.Router();
var competitors = require('../models/competitors.js');

router.get('/submit', function(req, res, next) {
  res.render('submit', { title: 'Let\'s Get Ready to RUMBLE!!!!', title2: 'There can be ONLY one!', competitorsArray : competitors.competitorsArray});
});

router.get('/fight', function(req, res, next){
  res.render('fight', {title: 'BATTLE TO THE DEATH', title2: 'or whatever, I don\'t mind.', competitorsArray : competitors.competitorsArray});
});


module.exports = router;
