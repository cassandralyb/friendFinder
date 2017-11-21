// Defining the variables

//require the friends data file 
var friends = require('../data/friends.js');

//Comparing user with best friend match, and holding the match
var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

// Here we take the result of the user's survey POST and parse it.
var userData 	= req.body;
var userName 	= userData.name;
var userPhoto 	= userData.photo;
var userScores 	= userData.scores;
var totalDifference = 0;

//Routes
module.exports = function (app) {

	// GET route
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	// POST route
	app.post('/api/friends', function(req, res){


		// Loop through all the friend possibilities in the database. 
		for  (var i=0; i< friends.length; i++) {

			console.log(friends[i].name);
			ttlDifference = 0;

			// Loop through all the scores of each friend
			for (var j=0; j< friends[i].scores[j]; j++){

				// We calculate the difference between the scores and sum them into the difference
				ttlDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				// If the sum of differences is less then the differences of the current "best match"
				if (ttlDifference <= bestMatch.friendDifference){

					// Reset the bestMatch to be the new friend. 
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = ttlDifference;
				}
			}
		}

		
		friends.push(userData);

		res.json(bestMatch);

	});

}