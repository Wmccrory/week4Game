//STAR WARS FIGHTER GAME///////////////////////////////////////////////////////////////////////////

 ///////////
// MODAL //

$(document).ready(function(){
	$("#myModal").fadeIn(1000);
});

$(".close").click(function() {
	$("#myModal").fadeOut(1000);
	$("#introVid").attr("src"," ");
});

 ///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

 /////////////////
//Variable Bank//
var hero;
var playerSelect = false;
var enemy;
var enemySelect = false;

//Hero stats
var heroName;
var heroMaxHealth;
var heroAttack;
var heroCounterAttack;
var heroPortrait;
var heroBattlePortrait;
var wins;

//Enemy stats
var enemyName;
var enemyMaxHealth;
var enemyAttack;
var enemyCounterAttack;
var enemyPortrait;
var enemyBattlePortrait;

 ///////////////////
//Character stats//

var kidA = {
	"name": "Jedi Knight Anakin Skywalker",
	"maxHealth": 100,
	"attack": 100,
	"attackDesc": "Sith Rage (Here I go killin' younglings again): ",
	"counterAttack": 50,
	"selectPortrait": "#kidaportrait",
	"battlePortrait": "#kidabattle",
	"wins": 0,
}

var kidB = {
	"name": "Sors Bandeam",
	"maxHealth": 100,
	"attack": 100,
	"attackDesc": "Resigned determination: ",
	"counterAttack": 50,
	"selectPortrait": "#kidbportrait",
	"battlePortrait": "#kidbbattle",
	"wins": 0,
}

var kidC = {
	"name": "Tusken Kid (Force Ghost)",
	"maxHealth": 100,
	"attack": 100,
	"attackDesc": "Power of Ghost of Younglings Past: ",
	"counterAttack": 50,
	"selectPortrait": "#kidcportrait",
	"battlePortrait": "#kidcbattle",
	"wins": 0,
}

var kidD = {
	"name": "Smug Jedi Pre-teen",
	"maxHealth": 100,
	"attack": 100,
	"attackDesc": "Smug adolescant superiority: ",
	"counterAttack": 50,
	"selectPortrait": "#kiddportrait",
	"battlePortrait": "#kiddbattle",
	"wins": 0,
}

///////////////////////////////////////////////////////////////////////////////////////////////////

 /////////////////
//Function bank//

//Select hero//
function heroSelect() {
	if (hero === "kidaportrait")
		{
		$("#kidabattle").appendTo("#opponentOneBattle");
		$("#kidaportrait").fadeOut(1000);
		$("#kidabattle").fadeIn(1000);
		hero = kidA;
		heroAttack = kidA.attack;
		}
	else if (hero === "kidbportrait")
		{	
		$("#kidbbattle").appendTo("#opponentOneBattle");
		$("#kidbportrait").fadeOut(1000);
		$("#kidbbattle").fadeIn(1000);
		hero = kidB;
		heroAttack = kidB.attack;
		}
	else if (hero === "kidcportrait")
		{	
		$("#kidcbattle").appendTo("#opponentOneBattle");
		$("#kidcportrait").fadeOut(1000);
		$("#kidcbattle").fadeIn(1000);
		hero = kidC;
		heroAttack = kidC.attack;
		}
	else if (hero === "kiddportrait")
		{	
		$("#kiddbattle").appendTo("#opponentOneBattle");
		$("#kiddportrait").fadeOut(1000);
		$("#kiddbattle").fadeIn(1000);
		hero = kidD;
		heroAttack = kidD.attack;
		}
	else
		{
		console.log("I don't know");
		}	
}

//Select opponent//
function opponentSelect() {
	if (enemy === "kidaportrait")
		{
		$("#kidabattle").appendTo("#opponentTwoBattle");
		$("#kidaportrait").fadeOut(1000);
		$("#kidabattle").fadeIn(1000);
		enemy = kidA;
		enemyAttack = kidA.attack;
		console.log(heroAttack);
		}
	else if (enemy === "kidbportrait")
		{	
		$("#kidbbattle").appendTo("#opponentTwoBattle");
		$("#kidbportrait").fadeOut(1000);
		$("#kidbbattle").fadeIn(1000);
		enemy = kidB;
		enemyAttack = kidB.attack;
		}
	else if (enemy === "kidcportrait")
		{	
		$("#kidcbattle").appendTo("#opponentTwoBattle");
		$("#kidcportrait").fadeOut(1000);
		$("#kidcbattle").fadeIn(1000);
		enemy = kidC;
		enemyAttack = kidC.attack;
		}
	else if (enemy === "kiddportrait")
		{	
		$("#kiddbattle").appendTo("#opponentTwoBattle");
		$("#kiddportrait").fadeOut(1000);
		$("#kiddbattle").fadeIn(1000);
		enemy = kidD;
		enemyAttack = kidD.attack;
		}
	else
		{
		console.log("I don't know");
		}		
}

   ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
 //Game progression/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


 //////////////////
//Fighter Select//

$(".pickingPortrait").on("click", function() {
	if ((playerSelect === true) && (enemySelect === true)) 
		{
		console.log("Heroes already chosen")
		}
	else if (playerSelect === false)
		{	
		playerSelect = true;
		hero = this.id;
		heroSelect();
		$("#opponentOneName").text(hero.name);
		$("#opponentOneHealth").text("Health: " + hero.maxHealth);
		$("#opponentOneForce").text(hero.attackDesc + heroAttack);
		console.log(hero);
		}
	else
		{
		enemySelect = true;
		enemy = this.id;
		opponentSelect();
		$("#opponentTwoName").text(enemy.name);
		$("#opponentTwoHealth").text("Health: " + enemy.maxHealth);
		$("#opponentTwoForce").text(enemy.attackDesc + enemyAttack);
		console.log(enemy);
		}
});




});

 //////////////////
//Fighter select//

// $("#kidaportrait").click(function kidAfunction() {
// 	// $("#kidaportrait").fadeOut(1000);
// 	// $("#kidabattle").fadeIn(1000);
// 		if ((opponentOneSelect === true) && (opponentTwoSelect === true)) 
// 		{
// 			console.log("Already selected opponents");
			
// 		} 
// 		else if (opponentTwoSelect !== true) 
// 		{
// 			console.log("elseif running");
// 			$("#kidabattle").appendTo("#opponentOneBattle");
// 			$("#opponentOneName").text("Jedi Knight Anakin Skywalker");
// 			$("#opponentOneHealth").text("Health: " + "100/100");	
// 			$("#kidaportrait").fadeOut(1000);
// 	$("#kidabattle").fadeIn(1000);		
// 		} 
// 		else 
// 		{
// 			$("#kidabattle").appendTo("#opponentTwoBattle");
// 			$("#opponentTwoName").text("Jedi Knight Anakin Skywalker");
// 			$("#opponentTwoHealth").text("Health: " + "100/100");
// 			$("#kidaportrait").fadeOut(1000);
// 	$("#kidabattle").fadeIn(1000);
// 		}
// });

// $("#kidbportrait").click(function() {
// 	$("#kidbportrait").fadeOut(1000);
// 	$("#kidbbattle").fadeIn(1000);
// 		if (opponentTwoSelect !== true) 
// 		{
// 			$("#kidbbattle").appendTo("#opponentOneBattle");
// 			$("#opponentOneName").text("Sors Bandeam");
// 			$("#opponentOneHealth").text("Health: " + "100/100");
// 			opponentOneSelect = true;
// 			opponentTwoSelect = true;
// 			console.log("opponent 1 select: "+ opponentOneSelect);
// 			console.log(opponentTwoSelect);
// 		} 
// 		else 
// 		{
// 			$("#kidbbattle").appendTo("#opponentTwoBattle");
// 			$("#opponentTwoName").text("Sors Bandeam");
// 			$("#opponentTwoHealth").text("Health: " + "100/100");
// 			opponentOneSelect = true;
// 			opponenTwoSelect = true;
// 			console.log(opponentOneSelect);
// 			console.log(opponentTwoSelect);
// 		}
// });

// $("#kidcportrait").click(function() {
// 	$("#kidcportrait").fadeOut(1000);
// 	$("#kidcbattle").fadeIn(1000);
// 		if (opponentTwoSelect !== true) 
// 		{
// 			$("#kidcbattle").appendTo("#opponentOneBattle");
// 			$("#opponentOneName").text("Tusken Kid (Force Ghost)");
// 			$("#opponentOneHealth").text("Health: " + "100/100");
// 		} 
// 		else 
// 		{
// 			$("#kidcbattle").appendTo("#opponentTwoBattle");
// 			$("#opponentTwoName").text("Tusken Kid (Force Ghost)");
// 			$("#opponentTwoHealth").text("Health: " + "100/100");
// 		}

// });

// $("#kiddportrait").click(function() {
// 	$("#kiddportrait").fadeOut(1000);
// 	$("#kiddbattle").fadeIn(1000);
// 		if (opponentTwoSelect !== true) 
// 		{
// 			$("#kiddbattle").appendTo("#opponentOneBattle");
// 			$("#opponentOneName").text("Smug Jedi Pre-teen");
// 			$("#opponentOneHealth").text("Health: " + "100/100");
// 		} 
// 		else 
// 		{
// 			$("#kiddbattle").appendTo("#opponentTwoBattle");
// 			$("#opponentTwoName").text("Smug Jedi Pre-teen");
// 			$("#opponentTwoHealth").text("Health: " + "100/100");
// 		}
// });