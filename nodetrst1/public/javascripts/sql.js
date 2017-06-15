var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'cenli2366',
	database:'teacherDB'
});

connection.connect(function(error) {
	if (error) {
		console.error('error connecting:' + error.staack);
		return;
	}
	console.log('DB connected ' + connection.threadId);
});

