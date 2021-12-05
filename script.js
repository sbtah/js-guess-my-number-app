"use strict";

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const mesageElem = document.querySelector(".message");
const numberElem = document.querySelector(".number");
const scoreElem = document.querySelector(".score");
const highScoreElem = document.querySelector(".highscore");
const bodyElem = document.querySelector("body");
const inputElem = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

console.log(secretNumber);

btnCheck.addEventListener("click", function () {
	const guess = Number(inputElem.value);

	if (score > 1) {
		if (!guess) {
			mesageElem.textContent = "You need to type a number!";
		} else if (guess === secretNumber) {
			mesageElem.textContent = "You win!";
			numberElem.textContent = secretNumber;
			bodyElem.style.backgroundColor = "#60b347";
			numberElem.style.width = "30rem";
			highScore += score;
			highScoreElem.textContent = highScore;
		} else if (guess < secretNumber) {
			mesageElem.textContent = "Guess higher!";
			score -= 1;
			scoreElem.textContent = score;
		} else if (guess > secretNumber) {
			mesageElem.textContent = "Guess lower!";
			score -= 1;
			scoreElem.textContent = score;
		}
	} else {
		mesageElem.textContent = "You lost!";
		scoreElem.textContent = 0;
	}
});

btnAgain.addEventListener("click", function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	bodyElem.style.backgroundColor = "#222";
	numberElem.style.width = "15rem";
	mesageElem.textContent = "Start guessing..";
	scoreElem.textContent = score;
	numberElem.textContent = "?";
	inputElem.value = "";
	console.log(secretNumber);
});
