// letter constructor
let Word = require("./word.js");
let guessArr = [];
let guessesArr = [];

function Letter(letter, word) {
  this.letter = letter;
  this.word = word;
  this.letterCheck = function(letter, word) {
    if (word.includes(letter)) {
      let newWord = new Word(letter, word);
      newWord.blankMaker(letter, word);
      newWord.blankFiller(letter, word);
    } else {
      let newWord = new Word(letter, word);
      newWord.blankMaker(letter, word);
      newWord.blankFiller(letter, word);
      guessArr.push(letter);
      guessesArr = guessArr.join(" ");
      console.log("Guesses You've Made: " + guessesArr);
    }
  };
};

module.exports = Letter;
