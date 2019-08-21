// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// The data source hold arrays of information on friends
// ===============================================================================
// Linking route to (friends.js) data source as an array of objects
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // match friends
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        res.json(findMatch(newFriend, friends));
        friends.push(newFriend);
    });
};

// Calculate Friend Compatibility
function calculateMatchScore(newPersonAnswers, possibleMatchPersonAnswers) {
    var totalDifference = 0;
    for (let i = 0; i < newPersonAnswers.length; i++) {
        totalDifference += Math.abs(newPersonAnswers[i] - possibleMatchPersonAnswers[i]);
    }
    return totalDifference;
};

function findMatch(newFriend, friends) {
    var minDifference = null;
    var minDifferenceFriend = null;
    for (let i = 0; i < friends.length; i++) {
        var totalDifference = calculateMatchScore(newFriend.scores, friends[i].scores);
        if (minDifference === null || totalDifference < minDifference) {
            minDifference = totalDifference;
            minDifferenceFriend = friends[i];
        }
    }
    return minDifferenceFriend;
};


