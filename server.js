var express = require("express");
var app = express();

var PORT = process.env.PORT || 3002;

app.get('/', function(req, res){
    res.send('hello kim')
});

app.listen(PORT, function(){
    console.log('listening on ' + PORT)
});
