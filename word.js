let startGame = require("./input.js");

let wordArr = [];
let blanks = [];

function Word(letter, word) {
  this.word = word;
  this.letter = letter;
  this.gameEnd = false;
  this.blankMaker = function(letter, word) {
    blanks = [];
    wordArr = word.split("");
    for (let i = 0; i < word.length; i++) {
      blanks.push("_");
    }
    console.log("");
    console.log("");
    console.log("============================================");
    console.log("");
    console.log("");
    console.log("                 " + blanks.join(" "));
    console.log("");
    console.log("");
    console.log("============================================");
    console.log("");
    console.log("");

  };
  this.blankFiller = function(letter, word) {
      for (let i = 0; i < wordArr.length; i++) {
        if (letter.includes(wordArr[i])) {
          blanks[i] = letter;
      }
    }
    console.log("");
    console.log("");
    console.log("============================================");
    console.log("");
    console.log("");
    console.log("                 " + blanks.join(" "));
    console.log("");
    console.log("");
    console.log("============================================");
    console.log("");
    console.log("");
  };
  this.gameEnder = function() {
    if (blanks.toString() === wordArr.toString()) {
      console.log("");
      console.log("");
      console.log("============================================");
      console.log("");
      console.log("");
      console.log("    You won! You are a true 'Office' fan!");
      console.log("");
      console.log("");
      console.log("============================================");
      console.log("");
      console.log("");
      this.gameEnd = true;
    }
  };
}



module.exports = Word;
