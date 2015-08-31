var competitorsArray = [];

var Submission = function(githubName, githubURL, githubImage){
  this.githubName = githubName;
  this.githubURL = githubURL;
  this.githubImage = githubImage || 'http://s.hswstatic.com/gif/whiskers-sam.jpg';
  this.votes = 0;
};

var submission = new Submission('test1', 'test1');

competitorsArray.push(submission);

module.exports = {
  Submission: Submission,
  competitorsArray:competitorsArray
};
