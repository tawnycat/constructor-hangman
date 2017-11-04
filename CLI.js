var inquirer = require("inquirer");
var word = require("./word.js");
var letter = require("./letter.js");
var gamestate = require("./gamestate.js");
var game;

function newGame () {

	game = new gamestate ();

};

var askForLetter = function() {

	if (game.guessCounter > 0 && game.hangmanWord.completeWord() === false) {

		inquirer.prompt([
		{
			type: "input",
			name: "ask",
			message: "Guess a letter!\n",
			validate: function (input) {
				if (input.length > 1) {
					return false;
				} else {
					return true;
				}
			},
			suffix: "\n" + game.hangmanWord.displayWord()
		}
		]).then(function(answer) {

			var guessedLetter = answer.ask;
			var anyMatch = false;

			for (var i = 0; i < game.hangmanWord.lettersArray.length; i++) {

				if (game.hangmanWord.lettersArray[i].isitCorrect(guessedLetter) === true) {

					anyMatch = true;

				} 
			}

			if (anyMatch) {

				askForLetter();

			} else {

				game.guessCounter--;

				if (game.guessCounter > 0) {

					console.log("Incorrect! Guesses left: " + game.guessCounter);

				}

				askForLetter();

			}

		});

	};

	if (game.guessCounter === 0 | game.hangmanWord.completeWord() === true) {

		if (game.guessCounter === 0) {

			console.log("You lost!");

		} else {

			console.log("You won!");

		}

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

newGame();
askForLetter();