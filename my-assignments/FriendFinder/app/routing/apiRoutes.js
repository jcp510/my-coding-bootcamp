// To link routes to friends data.
var friends = require("../data/friends");

module.exports = function(app) {

  // API GET request displays JSON of all friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST request to handle incoming survey results and compatibility logic.
  app.post("/api/friends", function(req, res) {
    var currentUser = req.body;
    console.log("currentUser = " + currentUser);
    console.log("currentUser.scores = " + currentUser.scores);
    // Compatibility logic.  Compare the difference between current user's scores against those from other 
    // users, question by question. Add up the differences to calculate the totalDifference.
    
    // Initialize score difference variables.
    var totalDifference = 0;
    var lowestDifference = 40;

    // To be called in for-loop below for finding difference in abs val between current user scores and other 
    // friends' scores.
    function diff(a, b) {
      totalDifference += Math.abs(a - b);
    }

    // Points to index in friends of best match.
    var bestMatch;

    // Loop over friends array of objects.
    for (var i = 0; i < friends.length; i++) {
      // Loop over scores array property of each friend in friends.
      for (var j = 0; j < friends[i].scores.length; j++) {
        diff(currentUser.scores[j], friends[i].scores[j]);
      }

      if (totalDifference < lowestDifference) {
        bestMatch = friends[i];
        lowestDifference = totalDifference;
      }
    }
    
    // Add new friend when new survey is submitted.
    friends.push(currentUser);

    // Send back best match in JSON response.
    res.json(bestMatch);
  });
};