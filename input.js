let prompt = require("prompt");
console.log("");
console.log("");
console.log("--------------------------------------------");
console.log("");
console.log("Welcome to 'The Office' hangman game!");
console.log("");
console.log("Each word is a character from the office.");
console.log("");
console.log("--------------------------------------------");
console.log("");
console.log("");

prompt.start();

prompt.get("Would You Like To Play? (Type 'yes' to play, 'no' to do something else)", function(err, data) {
  console.log(data.letter);
});
