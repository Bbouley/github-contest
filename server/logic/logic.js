var competitors = require('../models/competitors.js');

function urlValidation(array, name, url){
  for (var i = 0; i < array.length; i++) {
   if(array[i].githubName === name){
    return 'that competitor\'s already here!!';
   }
 }
  if(array.length === 8){
    return 'Your Array is full!!';
  } else {
    var submission = new competitors.Submission(name, url);
    array.push(submission);
    return array;
  }
}

module.exports = {
  urlValidation: urlValidation,
};
