function Letter (letter) {
	this.letter = letter;
	this.guessed = false;
	this.isitCorrect = function (input) {
		if (letter === input) {
			this.guessed = true;
			return true;
		}
		return false;
	}
	this.underscoreMaker = function () {
		if (this.guessed === true) {
			return " " + letter;
		} else {
			return " _";
		}
	}
};

module.exports = Letter;