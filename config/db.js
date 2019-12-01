const express    = require('express'),
      config     = require('./config'),
      mysql      = require('mysql');


// Connect to MySQL database
const pool = mysql.createPool({
    connectionLimit: 10,
    host: config.db.host,
    user: config.db.user,
    password: config.db.pass,
    database: config.db.name
});

// const pool = new Pool({
//     host: config.db.host,
//     user: config.db.user,
//     password: config.db.pass,
//     database: config.db.name,
//     port: config.db.port,
// });


// exports.getSession = function(id) {
//     // query to get session data by id
// }

// con.connect(function(err) {
//     if (err) {
//         return console.error('error: ' + err.message);
//     } 
//     console.log('Connected to MySQL server!');
// });

module.exports = pool;