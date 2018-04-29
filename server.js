var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();
// =========================================================










// =========================================================
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});