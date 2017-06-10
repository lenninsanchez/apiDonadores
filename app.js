var express = require('express');
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.connect();

app.get('/', function (req, res) {
	  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	  if (err) throw err;
	   res.send(rows);
	});
});

connection.end();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});