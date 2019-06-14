// Dependencies
var path = require("path");

module.exports = function(app) {

  // Displays survey page.
  app.get("/survey", function(req, res) {
    // path.join() joins all given path segments together
    // __dirname is the directory name of the current module.
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Default catch-all route to home page.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};