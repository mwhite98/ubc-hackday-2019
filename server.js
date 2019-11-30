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

app.get('/get_thread' , (req, res) => {

	let thread_id = req.body.thread_id;
	pool.query('SELECT * FROM `threads` WHERE thread_id = ?', [thread_id], function(err, rows) {
        if (err) {
            console.log(err.message);
            return;
		}
		
        if (rows.length !== 0) {
			console.log("==== get_thread response ====", rows[0]);
			res.send({
				"thread": rows[0],
			});
		} else {
            res.send({
				"error": "Failed to get single thread",
			});
		}
		
	});
});

app.get('/get_threads' , (req, res) => {

	let thread_ids = req.body.thread_ids;
	pool.query('SELECT * FROM `threads` WHERE thread_id IN (?)', [thread_ids], function(err, rows) {
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
			console.log("==== threadNames ====", threadNames);
			res.send({
				"threads": threadNames
			});
		} else {
            res.send({
				"error": "Failed to get threads",
			});
		}
		
	});
});
