$(document).ready(function(){
	$("#myModal").fadeIn(1000);
});

$(".close").click(function() {
$("#myModal").fadeOut(2200);
$("#introVid").attr("src"," ");
});