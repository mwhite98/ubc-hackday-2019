const express = require('express');
const app = express();
const config = require("./config/config");
const port = config.app.port;
const pool = require("./config/db");

// middleware
app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/get_thread' , async (req, res) => {

	let thread_id = req.body.thread_id;
	let mentorNames = [
		"Cinda Heeren",
		"Chris Hobbs",
		"Anthony Chu",
		"Jonas Bausch"
	];
	let eventsArr = [];
	let commentsArr = [];

	pool.query('SELECT * FROM `threads` WHERE thread_id = ?', [thread_id], function(err, rows) {
        if (err) {
            console.log(err.message);
            return;
		}
		console.log("==== getting threads ==== ")

        if (rows.length !== 0) {
			console.log("==== get_thread response ====", rows);
			let thread = rows[0];
			// TODO: need to implement 
			// for (let mentor in thread.mentor_names) {
			// 	if (mentor.name) mentorNames.push(mentor.name);
			// }

			pool.query('SELECT * FROM `events` WHERE thread_id = ?', [thread_id], function(err, events) {
				if (err) {
					console.log(err.message);
					return;
				}
				console.log("=== getting events === ")
		
				console.log("==== events ====", events);
				for (let event of events) {
					eventsArr.push(event);
				}

				pool.query('SELECT * FROM `comments` WHERE thread_id = ?', [thread_id], function(err, comments) {
					if (err) {
						console.log(err.message);
						return;
					}
					console.log("=== getting comments === ")
			
					console.log("==== comments ====", comments);
					for (let comment of comments) {
						commentsArr.push(comment);
					}
					
					const response = {
						"thread": {
							"thread_title": thread.thread_title,
							"events": eventsArr,
							"comments": commentsArr,
							"mentors": mentorNames
						}
					};
					
					console.log("=== RESPONSE ===", response);
					res.send(response);

				});

			});

		} else {
			console.log("Did not find any thread");
            res.send({
				"error": "Failed to get single thread",
			});
		}
	});


});


// request body has array of tags (string) passed in and if array is empty, just return all threads sorted by time
app.get('/get_threads' , (req, res) => {

	let thread_tags = req.body.thread_tags;
	console.log(thread_tags);
	pool.query('SELECT * FROM `threads` WHERE thread_tag IN (?)', [thread_tags], function(err, rows) {
        if (err) {
            console.log(err.message);
            return;
        }
        if (rows.length !== 0) {
			// console.log("==== get_threads response ====", rows);
			let threadNames = [];
			for (let thread of rows) {
				threadNames.push({
					"title": thread.thread_title
				});
			}
			// console.log("==== threadNames ====", threadNames);
			const response = {
				"threads": threadNames
			};
			console.log("=== RESPONSE ===", response);
			res.send(response);
		} else {
			console.log("Did not find any threads");
            res.send({
				"error": "Failed to get threads",
			});
		}
		
	});
});
