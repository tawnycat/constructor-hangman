var letter = require("./letter.js")

function Word (word) {
	this.lettersArray = [];
	this.addToArray = function () {
		for (var i = 0; i < word.length; i++) {
			var newLetter = new letter(word[i]);
			this.lettersArray.push(newLetter);
		}
	}
	this.displayWord = function () {
		var wordDisplay = "";
		for (var i = 0; i < this.lettersArray.length; i++) {
			wordDisplay += this.lettersArray[i].underscoreMaker();
		}
		return wordDisplay;
	}
	this.completeWord = function () {
		for (var i = 0; i < this.lettersArray.length; i++) {
			if (this.lettersArray[i].guessed === false) {
				return false;
			} 	
		}
		return true;
	}
};

module.exports = Word;