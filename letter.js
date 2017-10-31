function Letter (letter) {
	this.letter = letter;
	this.guessed = false;
	this.guessCheck = function (input) {
		if (letter === input) {
			this.guessed = true;
		}
		return this.guessed;
	}
	this.underscoreMaker = function () {
		if (this.guessed === true) {
			return letter;
		} else {
			return "_";
		}
	}
};

module.exports = Letter;