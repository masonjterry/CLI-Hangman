let Letter = require("./letter.js");
let Word = require("./word.js");
let game = require("./game.js");
let prompt = require("prompt");
let num;
let gameWord;
let initialQuestion = {
  properties: {
    question: {
      message: "Would you like to play? ('yes' or 'no')",
    }
  }
}

let letter = {
  properties: {
    letterPicked: {
      message: "Pick a letter",
    }
  }
}

console.log("");
console.log("");
console.log("============================================");
console.log("");
console.log("Welcome to 'The Office' hangman game!");
console.log("");
console.log("Each word is a character from the office.");
console.log("");
console.log("============================================");
console.log("");
console.log("");

prompt.start();

startGame();

function startGame() {
  prompt.get(initialQuestion, function(err, data) {
    if (data.question !== "yes") {
      console.log("That's what she said");
    } else {
      console.log("Let's start playing!");
      num = Math.floor(Math.random() * game.length);
      gameWord = game[num];
      let newWord = new Word(data.letterPicked, gameWord);
      newWord.blankMaker(data.letterPicked, gameWord);
      playGame();
    }
  });
};

function playGame() {
  prompt.get(letter, function(err, data) {
    let newLetter = new Letter(data.letterPicked, gameWord);
    newLetter.letterCheck(data.letterPicked, gameWord);
    let newWord = new Word(data.letterPicked, gameWord);
    newWord.gameEnder();
    if (newWord.gameEnd) {
      newLetter.resetStats();
      startGame();
    } else if (newLetter.letterReset) {
      newLetter.resetStats();
      startGame();
    } else {
      playGame();
    }
  });
}
