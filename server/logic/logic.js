var competitors = require('../models/competitors.js');

function urlValidation(array, name, url){
  for (var i = 0; i < competitors.competitorsArray.length; i++) {
   if(competitors.competitorsArray[i].githubName === name){
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

module.exports = {
  urlValidation: urlValidation,
};
