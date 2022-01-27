let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;
let points = 0;

$(document).keypress(function () {
	if (!started) {
		$("#level-title").text("level " + level);
		$("#key-info").text("pontos: " + points);
		nextSequence();
		started = true;
	}
});

$(".btn").click(function () {
	let userChosenColour = $(this).attr("id");
	userClickedPattern.push(userChosenColour);

	playSound(userChosenColour);
	animatePress(userChosenColour);

	checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
			points++;
			$("#key-info").text("pontos: " + points);
		}
	} else {
		playSound("wrong");
		$("body").addClass("game-over");
		$("#key-info").text("" + "aperte qualquer tecla para recomeçar");
		$("#level-title").text("game over! você fez " + points + " pontos!");
		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 200);

		startOver();
	}
}

function nextSequence() {
	userClickedPattern = [];
	level++;
	$("#level-title").text("level " + level);

	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);

	$("#" + randomChosenColour)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);
	playSound(randomChosenColour);
}

function animatePress(currentColor) {
	$("#" + currentColor).addClass("pressed");
	setTimeout(function () {
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}

function playSound(name) {
	let audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function startOver() {
	level = 0;
	points = 0;
	gamePattern = [];
	started = false;
}
