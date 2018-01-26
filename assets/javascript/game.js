//STAR WARS FIGHTER GAME///////////////////////////////////////////////////////////////////////////

// MODAL //

$(document).ready(function(){
	$("#myModal").fadeIn(1000);
});

$(".close").click(function() {
	$("#myModal").fadeOut(1000);
	$("#introVid").attr("src"," ");
});

$(".close").click(function() {
	$("#victoryModal").fadeOut(1000);
	$("#introVid").attr("src"," ");
});

 ///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

//Variable Bank//
var hero;
var playerSelect = false;
var enemy;
var enemySelect = false;

//Hero stats
var heroName;
var heroHealth;
var heroAttack;
var heroBaseAttack;
var heroPortrait;
var heroBattlePortrait;
var wins;

//Enemy stats
var enemyName;
var enemyHealth;
var enemyAttack;
var enemyPortrait;
var enemyBattlePortrait;

//Character stats//

var kidA = {
	"name": "Jedi Knight Anakin Skywalker",
	"maxHealth": 180,
	"attack": 5,
	"attackDesc": "Sith Rage (Here I go killin' younglings again): ",
	"counterAttack": 25,
	"selectPortrait": "#kidaportrait",
	"battlePortrait": "#kidabattle",
	"wins": 0,
	"winMsg": "EVEN IN VICTORY COMES LOSS",
	"winVid": "<img src='assets/images/anakinWin.gif' alt='Anakin wins' />",
	"loseMsg": "NOOOOOOOO",
	"loseVid": "<img src='assets/images/anakinLose.gif' alt='Anakin loses' />",
	"beatMsg": "THIS IS YOUR FAULT",
	"beatVid": "<img src='assets/images/anakinBeat.gif' alt='You beat Anakin' />",
}

var kidB = {
	"name": "Sors Bandeam",
	"maxHealth": 120,
	"attack": 15,
	"attackDesc": "Resigned determination: ",
	"counterAttack": 15,
	"selectPortrait": "#kidbportrait",
	"battlePortrait": "#kidbbattle",
	"wins": 0,
	"winMsg": "NOW <u>THIS</u> IS PODRACING",
	"winVid": "<img src='assets/images/sorsWin.gif' alt='Sors Bandeam wins' />",
	"loseMsg": "YOU WERE SUPPOSED TO BRING BALANCE",
	"loseVid": "<img src='assets/images/sorsLose.gif' alt='Sors Bandeam loses' />",
	"beatMsg": "NOW THIS IS <u>NOT</u> PODRACING",
	"beatVid": "<img src='assets/images/sorsBeat.gif' alt='You beat Sors' />",
}

var kidC = {
	"name": "Tusken Kid (Force Ghost)",
	"maxHealth": 100,
	"attack": 40,
	"attackDesc": "Power of Ghost of Younglings Past: ",
	"counterAttack": 5,
	"selectPortrait": "#kidcportrait",
	"battlePortrait": "#kidcbattle",
	"wins": 0,
	"winMsg": "RAARRGHHH RAGH RHAG",
	"winVid": "<img src='assets/images/tuskenWin.gif' alt='Tusken kid wins' />",
	"loseMsg": "RAARRGHHH RAGH RHAG",
	"loseVid": "<img src='assets/images/tuskenLose.gif' alt='Tusken Kid loses' />",
	"beatMsg": "RAARRGHHH RAGH RHAG",
	"beatVid": "<img src='assets/images/tuskenBeat.gif' alt='You beat Tusken Kid' />",
}

var kidD = {
	"name": "Smug Jedi Pre-teen",
	"maxHealth": 150,
	"attack": 7,
	"attackDesc": "Smug adolescant superiority: ",
	"counterAttack": 20,
	"selectPortrait": "#kiddportrait",
	"battlePortrait": "#kiddbattle",
	"wins": 0,
	"winMsg": "This is the worst summer camp ever",
	"winVid": "<img src='assets/images/preteenWin.gif' alt='Smug adolescant jedi wins' />",
	"loseMsg": "I'M CALLING CPS",
	"loseVid": "<img src='assets/images/preteenLose.gif' alt='Smug adolescant jedi loses' />",
	"beatMsg": "NOOOO, IT'S NOT FAIR",
	"beatVid": "<img src='assets/images/preteenBeat.gif' alt='You beat Smug adolescant jedi' />",
}

///////////////////////////////////////////////////////////////////////////////////////////////////

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
		heroBaseAttack = kidA.attack;
		heroHealth = kidA.maxHealth;
		}
	else if (hero === "kidbportrait")
		{	
		$("#kidbbattle").appendTo("#opponentOneBattle");
		$("#kidbportrait").fadeOut(1000);
		$("#kidbbattle").fadeIn(1000);
		hero = kidB;
		heroAttack = kidB.attack;
		heroBaseAttack = kidB.attack;
		heroHealth = kidB.maxHealth;
		}
	else if (hero === "kidcportrait")
		{	
		$("#kidcbattle").appendTo("#opponentOneBattle");
		$("#kidcportrait").fadeOut(1000);
		$("#kidcbattle").fadeIn(1000);
		hero = kidC;
		heroAttack = kidC.attack;
		heroBaseAttack = kidC.attack;
		heroHealth = kidC.maxHealth;
		}
	else if (hero === "kiddportrait")
		{	
		$("#kiddbattle").appendTo("#opponentOneBattle");
		$("#kiddportrait").fadeOut(1000);
		$("#kiddbattle").fadeIn(1000);
		hero = kidD;
		heroAttack = kidD.attack;
		heroBaseAttack = kidD.attack;
		heroHealth = kidD.maxHealth;
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
}

//Attack function//
function attackMechanics() {
	enemyHealth = enemyHealth - heroAttack;
	if (enemyHealth < 1) 
	{
		hero.wins++;
		heroAttack = (heroAttack + heroBaseAttack);
		$("#opponentOneForce").text(hero.attackDesc + heroAttack);
		console.log(hero.wins);
		enemySelect = false;
		$(enemy.battlePortrait).fadeOut(1000);
		$("#opponentTwoName").html("<s>" + enemy.name + "</s>");
		$("#opponentTwoHealth").text("Opponent has been slain");
		$("#opponentTwoForce").text("Choose another for the slaughter");
		//Game win condition//
		if (hero.wins === 3) 
		{
			console.log("You've won");
			$("#victoryModal").fadeIn(500);
			$("#winText").html("<h2>" + hero.winMsg + "</h2>");
			$("#winRefresh").html("<h6>" +"REFRESH TO SEE THE STORIES OF YOUR OPPONENTS" + "</h6>");
			$("#victoryVid").html(hero.winVid);;
		}
		else
		{
			$("#victoryModal").fadeIn(500);
			$("#winText").html("<h2>" + enemy.beatMsg + "</h2>");
			$("#victoryVid").html(enemy.beatVid);
		}
	}
	else 
	{
		heroAttack = (heroAttack + heroBaseAttack);
		console.log(heroAttack);
		$("#opponentOneForce").text(hero.attackDesc + heroAttack);
		return $("#opponentTwoHealth").text("Health: " + enemyHealth);
	}
}

//CounterAttack function
function counterAttackMechanics () {
	heroHealth = heroHealth - enemyAttack;
	if (heroHealth < 1) 
	{
		$("#opponentOneHealth").text("Health: " + heroHealth);
		$("#victoryModal").fadeIn(500);
		$("#winText").html("<h2>" + hero.loseMsg + "</h2>");
		$("#winRefresh").html("<h6>" +"REFRESH TO SEE THE STORIES OF YOUR OPPONENTS" + "</h6>");
		$(".close").html(" ");
		$("#victoryVid").html(hero.loseVid);;
	}
	else
	{
		return $("#opponentOneHealth").text("Health: " + heroHealth);
	}
}

 //Game progression/////////////////////////////////////////////////////////////////////////////////

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