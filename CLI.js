var inquirer = require("inquirer");
var word = require("./word.js");
var Chance = require('chance'),
    chance = new Chance();
var randomWord = chance.string();
var guessCounter = 0;

var hangmanWord = new Word (randomWord);

var askForLetter = function() {

  if (guessCounter < 5 && word.completeWord() === false) {

    inquirer.prompt([
      {
        name: "ask",
        message: "Guess a letter!"
      }
    ]).then(function(answers) {



    });

};

askForLetter();