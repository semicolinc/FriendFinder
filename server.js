//dependencies
var express = require("express");
var bodyParser = require("body-parser");

//config
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

app.get('/', function(req, res) {
    res.send('Hello World');
})