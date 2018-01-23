 ///////////
// MODAL //

$(document).ready(function(){
	$("#myModal").fadeIn(1000);
});

$(".close").click(function() {
	$("#myModal").fadeOut(2200);
	$("#introVid").attr("src"," ");
});
 ///////////////////////////////
//Character choosing variable//
var opponentOneSelect
var opponentTwoSelect

$(".pickingPortrait").click(function() {
	if ((opponentOneSelect === true) && (opponentTwoSelect === true)) {
		console.log("Already selected characters");
	}
	else if (opponentOneSelect === true) {
		opponentTwoSelect = true;
		return;
	} else {
		opponentOneSelect = true;
		return;
	}
});

 ///////////////////
//Portrait select//

$("#kidaportrait").click(function() {
	$("#kidaportrait").fadeOut(1000);
	$("#kidabattle").fadeIn(1000);
		if (opponentOneSelect === true && opponentTwoSelect === true) {
			console.log("Already selected opponents");
			return;
		} else if (opponentTwoSelect !== true) {
			$("#kidabattle").appendTo("#opponentOneBattle");
			$("#opponentOneName").text("Anakin Skywalker");
			$("#opponentOneHealth").text("Health: " + "100/100");
		return;
		} else {
			$("#kidabattle").appendTo("#opponentTwoBattle");
			$("#opponentTwoName").html("Anakin Skywalker");
		}
});

$("#kidbportrait").click(function() {
	$("#kidbportrait").fadeOut(1000);
	$("#kidbbattle").fadeIn(1000);
		if (opponentTwoSelect !== true) {
			$("#kidbbattle").appendTo("#opponentOneBattle");
			$("#opponentOneName").text("Sors Bandeam");
			$("#opponentOneHealth").text("Health: " + "100/100");
		} else {
			$("#kidbbattle").appendTo("#opponentTwoBattle");
			$("#opponentTwoName").text("Sors Bandeam");
			$("#opponentTwoHealth").text("Health: " + "100/100");
		}
});

$("#kidcportrait").click(function() {
	$("#kidcportrait").fadeOut(1000);
	$("#kidcbattle").fadeIn(1000);
		if (opponentOneSelect = true) {
		$("#kidcbattle").appendTo("#opponentOneBattle");
		} else if (opponentTwoSelect = true) {
		$("#kidcbattle").appendTo("#opponentTwoBattle");
		} else {
			console.log("Game has shit the bed");
		}
});

$("#kiddportrait").click(function() {
	$("#kiddportrait").fadeOut(1000);
	$("#kiddbattle").fadeIn(1000);
		if (opponentOneSelect = true) {
		$("#kiddbattle").appendTo("#opponentOneBattle");
		} else if (opponentTwoSelect = true) {
		$("#kiddbattle").appendTo("#opponentTwoBattle");
		} else {
			console.log("Game has shit the bed");
		}
});