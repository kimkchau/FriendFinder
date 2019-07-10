// Linking route to (friends.js) data source as an array of objects
var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    // TODO: match friends
    app.post("/api/friends", function(req, res){
        
        
        
        
        friends.push(req.body);
        res.json
    });
}