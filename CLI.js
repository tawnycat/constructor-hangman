var inquirer = require("inquirer");
var word = require("./word.js");
var letter = require("./letter.js");
var randomWord = require('random-word');
var guessCounter = 5;
var hangmanWord;

function newGame () {

var randomWord = randomWord();
var hangmanWord = new word (randomWord);
hangmanWord.addToArray();

};

var askForLetter = function() {

	if (guessCounter > 5 | hangmanWord.completeWord() === false) {

		inquirer.prompt([
		{
			type: "input",
			name: "ask",
			message: "Guess a letter!",
			validate: function (input) {
				if (input.length > 1) {
					return false;
				} else {
					return true;
				}
			},
			suffix: "\n" + hangmanWord.displayWord()
		}
		]).then(function(answer) {

			var guessedLetter = answer.ask;
			var anyMatch = false;

			for (var i = 0; i < hangmanWord.lettersArray.length; i++) {

				if (hangmanWord.lettersArray[i].isitCorrect(guessedLetter) === true) {

					anyMatch = true;

				} 
			}

			if (anyMatch) {

				askForLetter();

			} else {

				guessCounter--;
				console.log("Incorrect! Only " + guessCounter + " guesses left!");

				askForLetter();

			}

		});

		if (guessCounter === 0 | hangmanWord.completeWord === true) {

			inquirer.prompt([
			{
				type: "confirm",
				name: "playAgain",
				message: "Want to play again?"
			}
				]).then(function(answer) {

				if (answer.playAgain === true) {

					newGame();
					askForLetter();

				} else {

					console.log("Thanks for playing!");

				}

			});

		}

	};

};

askForLetter();