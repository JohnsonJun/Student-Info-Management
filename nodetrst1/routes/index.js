var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/studentlist', function(req,res){
	var connection = req.connection;
	connection.query('SELECT * FROM student', function(error, results, fields){
		if (error) {
			console.error(error);
			throw error;
		};
		res.render('students', {
			results: results
		});
	});
	return;
});

router.get('/addstudent', function(req,res){
	res.render('addstudent');
});

router.post('/createstudent',function(req,res){
	var stn = req.body.studentname;
	// check if the input is valid or not
	if (stn.length == 0) {
		res.send("Please input Student Name.");
		return;
	}
	// delete the space before and after the input name
	stn = stn.trim();
	// check if the input only has one word
	if (stn.indexOf(',') == -1 && stn.indexOf(' ') == -1){
		res.send("Please input Student Name in right Form, Last, First or First Last.");
		return;
	}
	//Change the form of name that begin with capitaal letter
	stn = stn.toLowerCase().replace(/\b[a-z]/g, function(letter){
		return letter.toUpperCase();
	});
	// start parse the name into Last and first
	// Input Case: First Last
	var arr,firstname,lastname; 
	if(stn.indexOf(',') == -1){
		arr = stn.split(' ');
		firstname = arr[0];
		lastname = arr[1];
	} else {
		arr = stn.split(',');
		lastname = arr[0].trim();
		firstname = arr[1].trim();
	}
	// add the right studnet name into Mysql DB
	var connection = req.connection;
	var insertSql = "INSERT INTO student (lastname, firstname) VALUES ? ";
	var insertValue = [[lastname,firstname]];
	console.log(insertValue);
	connection.query(insertSql,[insertValue],function(err,result){
		if (err){
			if (err.message.indexOf('Duplicate entry') != -1){
				res.send("Student already exist");
			} else{
				res.send("Database error: " + err.message);
			}
			return;
		}
		console.log(result.affectedRows);
		// when success redirect to student list page
		res.send({redirect:'/studentlist'});
		return;
	});
});
module.exports = router;
