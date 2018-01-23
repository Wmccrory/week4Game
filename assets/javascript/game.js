 ///////////
// MODAL //

$(document).ready(function(){
	$("#myModal").fadeIn(1000);
});

$(".close").click(function() {
	$("#myModal").fadeOut(1000);
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
			$("#opponentOneName").text("Jedi Knight Anakin Skywalker");
			$("#opponentOneHealth").text("Health: " + "100/100");
		return;
		} else {
			$("#kidabattle").appendTo("#opponentTwoBattle");
			$("#opponentTwoName").text("Jedi Knight Anakin Skywalker");
			$("#opponentOneHealth").text("Health: " + "100/100");
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
		if (opponentTwoSelect !== true) {
			$("#kidcbattle").appendTo("#opponentOneBattle");
			$("#opponentOneName").text("Tusken Kid (Force Ghost)");
			$("#opponentOneHealth").text("Health: " + "100/100");
		} else {
			$("#kidcbattle").appendTo("#opponentTwoBattle");
			$("#opponentTwoName").text("Tusken Kid (Force Ghost)");
			$("#opponentTwoHealth").text("Health: " + "100/100");
		}

});

$("#kiddportrait").click(function() {
	$("#kiddportrait").fadeOut(1000);
	$("#kiddbattle").fadeIn(1000);
		if (opponentTwoSelect !== true) {
			$("#kiddbattle").appendTo("#opponentOneBattle");
			$("#opponentOneName").text("Smug Jedi Pre-teen");
			$("#opponentOneHealth").text("Health: " + "100/100");
		} else {
			$("#kiddbattle").appendTo("#opponentTwoBattle");
			$("#opponentTwoName").text("Smug Jedi Pre-teen");
			$("#opponentTwoHealth").text("Health: " + "100/100");
		}
});