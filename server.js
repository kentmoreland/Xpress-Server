var express = require("express"),

app = express()

var port = 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + "/client/index.html");
});

app.use(express.static('client'));

app.listen(port, function(){
  console.log(`Listening on port ${port}...`);
});