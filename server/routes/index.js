var express = require('express');
var router = express.Router();

var competitorsArray = [];
var fighters = [];

router.get('/submit', function(req, res, next) {
  res.render('submit', { title: 'Let\'s Get Ready to RUMBLE!!!!', title2: 'There can be ONLY one!'});
});

router.get('/fight', function(req, res, next){
  res.render('fight', {title: 'BATTLE TO THE DEATH', title2: 'or whatever, I don\'t mind.'});
});

router.post('/submit', function(req, res, next){
 var response = urlValidation(competitorsArray, req.body.name, req.body.URL);
 res.render('submit', response);
});



//Logic

var Submission = function(githubName, githubURL, githubImage){
  this.githubName = githubName;
  this.githubURL = githubURL;
  this.githubImage = githubImage || 'http://s.hswstatic.com/gif/whiskers-sam.jpg';
};

function urlValidation(array, name, url){
  for (var i = 0; i < competitorsArray.length; i++) {
   if(competitorsArray[i].githubName === name){
    return {title: 'Let\'s Get Ready to RUMBLE!!!!', title2: 'There can be ONLY one!', competitorsArray : competitorsArray, error: 'That competitor\'s already here!!!'};
   }
 }
  if(array.length === 8){
    return {title: 'Let\'s Get Ready to RUMBLE!!!!', title2: 'There can be ONLY one!', competitorsArray : competitorsArray, error: 'Your Array is full!!'};
  } else {
    var submission = new Submission(name, url);
    competitorsArray.push(submission);
    console.log(competitorsArray);
    return ({ title: 'Let\'s Get Ready to RUMBLE!!!!', title2: 'There can be ONLY one!', competitorsArray : competitorsArray});
  }
}


module.exports = router;
