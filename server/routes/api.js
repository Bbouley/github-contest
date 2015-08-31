var express = require('express');
var router = express.Router();
var competitors = require('../models/competitors.js');
var logic = require('../logic/logic.js');


router.post('/submit', function(req, res, next){
  var response = logic.urlValidation(competitors.competitorsArray, req.body.name, req.body.URL);
  console.log(response);
 //  var submission = new competitors.Submission(req.body.name, req.body.URL);
 // competitors.competitorsArray.push(submission);
 res.json(response);
});

router.post('/fight', function(req, res, next){
  competitors.competitorsArray[req.body.index].votes += 1;
  res.json(competitors.competitorsArray[req.body.index].votes);
});

router.get('/submit', function(req, res, next){
  res.json(competitors.competitorsArray);
});

module.exports = router;
