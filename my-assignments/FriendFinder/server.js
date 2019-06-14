// Dependencies.
var express = require("express");

// Initialize Express server.
var app = express();

var PORT = process.env.PORT || 3000;

// Built-in middleware for parsing data.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve static files from public directory.
app.use(express.static("public"));

// Router.
// apiRoutes == [Function], htmlRoutes == [Function]
// apiRoutes(app); htmlRoutes(app);
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start server to begin listening.
app.listen(PORT, function() {
  console.log("FriendFinder app listening on PORT " + PORT);
});