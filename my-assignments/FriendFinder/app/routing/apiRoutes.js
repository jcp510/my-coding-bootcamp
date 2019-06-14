// To link routes to friends data.
var friends = require("../data/friends");

module.exports = function(app) {

  // API GET request displays JSON of all friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST reques to handle incoming survey results and compatibility logic.
  app.post("/api/friends", function(req, res) {

    // Add new friend when new survey is submitted.
    friends.push(req.body);
  });
};