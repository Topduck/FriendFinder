// loading data from friends db js.
var friends = require("../data/friends");
var fs = require('fs');

//Routing
module.exports = function(app) {
    // API GET Requests
  
    app.get("/apiroutes", function(req, res) {
        res.json(friends);
    },

    app.post("/apiroutes", function(req, res) {
// Store current user scores in array.
    var user = req.body;
    var friendName;
    var friendPic;
    var friendDiffTotal = 99999
    //using to for loops to access friends survey scores and compare against users one at a time
    for (let i = 0; i < friends.length; i++) {
        var diff = 0;
        for (let  v= 0; v < friends[i].scores.length; v++) {
             console.log(`friend ${friends[i].scores[v]}`);
             console.log(`uSser scores: ${user.scores[v]}`);
            diff += Math.abs(Number(friends[i].scores[v])-Number(user.scores[v]));
            console.log(diff);
        };
        //assigns new best friend if diff is less then previous
        if(friendDiffTotal > diff) {
            friendDiffTotal = diff;
            friendName = friends[i].name;
            friendPic = friends[i].photo;
        }
    };
    //respond back to place inside modal
    res.json({status: 'OK', friendName:friendName, friendPic:friendPic});
    //push new friend to db.
    console.log(req.body);
    friends.push(req.body);
    })
    )};
