$(document).ready(function(){
	$("#save").click(function(){
		var Studentname = $("#inputStudentName").serialize();
		$.ajax({
			method:"POST",
			url:"/createstudent",
			data:Studentname
		}).done(function(data){
			if(data.redirect){
				alert("Student Added Successful");
				window.location.href = data.redirect;
			} else{
				alert(data);
			}
		});
		return false;		
	});
});