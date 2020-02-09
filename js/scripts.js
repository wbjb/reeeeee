$(document).ready(function() {
$("form#feedback").submit(function(event) {
	event.preventDefault();
	var response = $("#statement").val();
	$("#output").text(response);
	});


});

   var flavor = $("input:radio[name=flavor]:checked").val();
   var dob = $("#born").val();
   var favoriteColor = $("#color").val();