var express = require('express');
var router = express.Router();

var competitorsArray = [];

router.get('/votes', function(req, res, next) {
  for (var i = 0; i < competitorsArray.length; i++) {
    res.json(competitorsArray[i].votes);
  }
});

router.post('/submit', function(req, res, next){
 var response = urlValidation(competitorsArray, req.body.name, req.body.URL);
 res.render('submit', response);
});

router.post('/fight', function(req, res, next){
  competitorsArray[req.body.index].votes += 1;
  res.json(competitorsArray[req.body.index].votes);
});

router.get('/fight', function(req, res, next){
  console.log('being got');
  res.json(competitorsArray);
});

module.exports = router;
