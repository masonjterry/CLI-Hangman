let wordArr = [];
let blanks = [];

function Word(letter, word) {
  this.word = word;
  this.letter = letter;
  this.blankMaker = function(letter, word) {
    blanks = [];
    wordArr = word.split("");
    for (let i = 0; i < word.length; i++) {
      blanks.push("_ ");
    }
  };
  this.blankFiller = function(letter, word) {
      for (let i = 0; i < wordArr.length; i++) {
        if (letter.includes(wordArr[i])) {
          blanks[i] = letter;
      }
    }
    console.log("");
    console.log("--------------------------------------------");
    console.log("");
    console.log(blanks.join(""));
    console.log("");
    console.log("--------------------------------------------");
    console.log("");
  };
}

// let newLetter = new Word("l", "baseball");
// newLetter.blankMaker("l", "baseball");
// newLetter.blankFiller("l", "baseball");

module.exports = Word;
