var randomWord = require('random-word');
var word = require("./word.js");

function GameState () {

	this.guessCounter = 5,
	this.hangmanWord = new word (randomWord())
};

module.exports = GameState;