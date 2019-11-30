const express = require('express');
const app = express();
const config = require("./config/config");
const port = config.app.port;
const pool = require("./config/db");

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/get_event' , (req, res) => {

});

// get_threads
// get_thread

