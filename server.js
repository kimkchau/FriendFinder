var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(req, rest){
    rest.send('hello kim')
});

app.listen(PORT, funciton(){
    console.log('listening on ' + PORT)
});
