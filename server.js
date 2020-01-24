// server.js
// where your node app starts
// init project
var express = require("express");
var path = require("path");
var app = express();

var isNumeric = function(input) {
  return !isNaN(parseFloat(input)) && isFinite(input);
};
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
// http://expressjs.com/en/starter/basic-routing.html
var convertTime=function(time){
  var isUnix=isUnixTimestamp
}



var trimDate=function(dateStr){
  var i=0;
  while(i<dateStr.length && dateStr[i] !==" ")
    {
      i++;
    }
  i++;
  return dateStr.substring(i);
}





app.use(express.static("public"));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/api/timestamp/:data", function(req, res) {
  if (req.params && Object.keys(req.params).lenghth > 0) {
    res.send(JSON.stringify(convertTime(req.params.data)));
  } else {
    res.sensStatus(400);
  }
});
// your first API endpoint...
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
