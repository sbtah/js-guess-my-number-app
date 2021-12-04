"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let mesageElem = document.querySelector(".message");
let numberElem = document.querySelector(".number");
let scoreElem = document.querySelector(".score");
let highScoreElem = document.querySelector(".highscore");
const inputElem = document.querySelector(".guess");
const btnElem = document.querySelector(".check");

console.log(secretNumber);

btnElem.addEventListener("click", function () {
	const guess = Number(inputElem.value);
	if (!guess) {
		mesageElem.textContent = "You need to type a number!";
	} else if (guess === secretNumber) {
		mesageElem.textContent = "You win!";
		highScoreElem.textContent = scoreElem.textContent;
		numberElem.textContent = secretNumber;
	} else if (guess < secretNumber) {
		mesageElem.textContent = "Guess higher!";
		scoreElem.textContent -= 1;
	} else if (guess > secretNumber) {
		mesageElem.textContent = "Guess lower!";
		scoreElem.textContent -= 1;
	}
});
