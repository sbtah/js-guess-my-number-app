"use strict";

function calcRandom() {
	return Math.trunc(Math.random() * 20) + 1;
}

let score = 20;
let highScore = 0;
let secretNumber = calcRandom();
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
			if (score > highScore) {
				highScore = score;
				highScoreElem.textContent = highScore;
			}
		} else if (guess !== secretNumber) {
			mesageElem.textContent =
				guess > secretNumber ? "Guess lower!" : "Guess higher!";
			score -= 1;
			scoreElem.textContent = score;
		}
	} else {
		mesageElem.textContent = "You lost!";
		scoreElem.textContent = 0;
	}
});

btnAgain.addEventListener("click", function () {
	secretNumber = calcRandom();
	score = 20;
	bodyElem.style.backgroundColor = "#222";
	numberElem.style.width = "15rem";
	mesageElem.textContent = "Start guessing..";
	scoreElem.textContent = score;
	numberElem.textContent = "?";
	inputElem.value = "";
	console.log(secretNumber);
});
