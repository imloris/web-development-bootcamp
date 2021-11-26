var randomNumber1 = Math.floor(Math.random() * 6) + 1,
	randomNumber2 = Math.floor(Math.random() * 6) + 1,
	dice1 = "img/" + randomNumber1 + ".png",
	dice2 = "img/" + randomNumber2 + ".png",
	img1 = document.getElementById("img1"),
	img2 = document.getElementById("img2");

img1.src = dice1;
img2.src = dice2;

if (randomNumber1 > randomNumber2) {
	document.getElementById("winner").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
	document.getElementById("winner").innerHTML = "Player 2 Wins!";
} else {
	document.getElementById("winner").innerHTML = "Draw!";
}
