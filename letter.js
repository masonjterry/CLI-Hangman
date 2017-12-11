let Word = require("./word.js");
let startGame = ("./input.js");
let guessArr = [];
let guessesArr = [];
let guesses = 10;

function Letter(letter, word) {
  this.letter = letter;
  this.word = word;
  this.letterReset = false;
  this.letterCheck = function(letter, word) {
    if (word.includes(letter)) {
      let newWord = new Word(letter, word);
      newWord.blankFiller(letter, word);
      newWord.gameEnder();
      guessArr.push(letter);
      guessesArr = guessArr.join(" ");
      console.log("Guesses You've Made: " + guessesArr);
      console.log("Guesses Left: " + guesses);
    } else {
      guesses--;
      let newWord = new Word(letter, word);
      newWord.blankFiller(letter, word);
      newWord.gameEnder();
      guessArr.push(letter);
      guessesArr = guessArr.join(" ");
      console.log("Guesses You've Made: " + guessesArr);
      console.log("Guesses Left: " + guesses);
      if (guesses === 0) {
        guesses = 10;
        guessesArr = [];
        guessArr = [];
        console.log("");
        console.log("");
        console.log("============================================");
        console.log("");
        console.log("");
        console.log("           The name was: " + word);
        console.log("");
        console.log("      You are not a true 'Office' fan...");
        console.log("");
        console.log("");
        console.log("============================================");
        console.log("");
        console.log("");
        this.letterReset = true;
      }
    }
  };
  this.resetStats = function() {
    guesses = 10;
    guessesArr = [];
    guessArr = [];
  }
};

module.exports = Letter;
