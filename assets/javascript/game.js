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
var heroHealth;
var heroAttack;
var heroPortrait;
var heroBattlePortrait;
var wins;

//Enemy stats
var enemyName;
var enemyHealth;
var enemyAttack;
var enemyPortrait;
var enemyBattlePortrait;

 ///////////////////
//Character stats//

var kidA = {
	"name": "Jedi Knight Anakin Skywalker",
	"maxHealth": 1000,
	"attack": 100,
	"attackDesc": "Sith Rage (Here I go killin' younglings again): ",
	"counterAttack": 50,
	"selectPortrait": "#kidaportrait",
	"battlePortrait": "#kidabattle",
	"wins": 0,
}

var kidB = {
	"name": "Sors Bandeam",
	"maxHealth": 1000,
	"attack": 100,
	"attackDesc": "Resigned determination: ",
	"counterAttack": 50,
	"selectPortrait": "#kidbportrait",
	"battlePortrait": "#kidbbattle",
	"wins": 0,
}

var kidC = {
	"name": "Tusken Kid (Force Ghost)",
	"maxHealth": 1000,
	"attack": 100,
	"attackDesc": "Power of Ghost of Younglings Past: ",
	"counterAttack": 50,
	"selectPortrait": "#kidcportrait",
	"battlePortrait": "#kidcbattle",
	"wins": 0,
}

var kidD = {
	"name": "Smug Jedi Pre-teen",
	"maxHealth": 1000,
	"attack": 100,
	"attackDesc": "Smug adolescant superiority: ",
	"counterAttack": 600,
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
		heroHealth = kidA.maxHealth;
		}
	else if (hero === "kidbportrait")
		{	
		$("#kidbbattle").appendTo("#opponentOneBattle");
		$("#kidbportrait").fadeOut(1000);
		$("#kidbbattle").fadeIn(1000);
		hero = kidB;
		heroAttack = kidB.attack;
		heroHealth = kidB.maxHealth;
		}
	else if (hero === "kidcportrait")
		{	
		$("#kidcbattle").appendTo("#opponentOneBattle");
		$("#kidcportrait").fadeOut(1000);
		$("#kidcbattle").fadeIn(1000);
		hero = kidC;
		heroAttack = kidC.attack;
		heroHealth = kidC.maxHealth;
		}
	else if (hero === "kiddportrait")
		{	
		$("#kiddbattle").appendTo("#opponentOneBattle");
		$("#kiddportrait").fadeOut(1000);
		$("#kiddbattle").fadeIn(1000);
		hero = kidD;
		heroAttack = kidD.attack;
		heroHealth = kidD.maxHealth;
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
		enemyAttack = kidA.counterAttack;
		enemyHealth = kidA.maxHealth;
		}
	else if (enemy === "kidbportrait")
		{	
		$("#kidbbattle").appendTo("#opponentTwoBattle");
		$("#kidbportrait").fadeOut(1000);
		$("#kidbbattle").fadeIn(1000);
		enemy = kidB;
		enemyAttack = kidB.counterAttack;
		enemyHealth = kidB.maxHealth;
		}
	else if (enemy === "kidcportrait")
		{	
		$("#kidcbattle").appendTo("#opponentTwoBattle");
		$("#kidcportrait").fadeOut(1000);
		$("#kidcbattle").fadeIn(1000);
		enemy = kidC;
		enemyAttack = kidC.counterAttack;
		enemyHealth = kidC.maxHealth;
		}
	else if (enemy === "kiddportrait")
		{	
		$("#kiddbattle").appendTo("#opponentTwoBattle");
		$("#kiddportrait").fadeOut(1000);
		$("#kiddbattle").fadeIn(1000);
		enemy = kidD;
		enemyAttack = kidD.counterAttack;
		enemyHealth = kidD.maxHealth;
		}
	else
		{
		console.log("I don't know");
		}		
}

//Attack function//
function attackMechanics() {
	enemyHealth = enemyHealth - heroAttack;
	if (enemyHealth < 1) 
	{
		hero.wins++;
		enemySelect = false;
		$(enemy.battlePortrait).fadeOut(1000);
		console.log(enemy.battlePortrait);
		$("#opponentTwoName").html("<s>" + enemy.name + "</s>");
		$("#opponentTwoHealth").text("Opponent has been slain");
		$("#opponentTwoForce").text("Choose another for the slaughter");
	}
	else 
	{
		return $("#opponentTwoHealth").text("Health: " + enemyHealth);
	}
}

//CounterAttack function
function counterAttackMechanics () {
	heroHealth = heroHealth - enemyAttack;
	if (heroHealth < 1) 
	{
		console.log("Hero has died");
	}
	else
	{
		return $("#opponentOneHealth").text("Health: " + heroHealth);
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
		$("#opponentOneHealth").text("Health: " + heroHealth);
		$("#opponentOneForce").text(hero.attackDesc + heroAttack);
		console.log(hero);
		}
	else
		{
		enemySelect = true;
		enemy = this.id;
		opponentSelect();
		$("#opponentTwoName").text(enemy.name);
		$("#opponentTwoHealth").text("Health: " + enemyHealth);
		$("#opponentTwoForce").text(enemy.attackDesc + enemyAttack);
		console.log(enemy);
		}
});

 //////////////////
//Fighter Attack//

$("#attackBtn").on("click", function() {
	if ((playerSelect === false) || (enemySelect === false))
	{
		console.log("Not ready for the slaughter");
	}
	else
	{
	attackMechanics();
	counterAttackMechanics();
	}
});

}); //End of code execution