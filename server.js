var express = require("express");

var app = express();

var PORT = process.env.PORT || 8090;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log('Server listening on: http://localhost:' + PORT);
});
