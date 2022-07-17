'use strict';

let siteVisitor = prompt('What is your name?');
alert(`Welcome to my site, ${siteVisitor}! Use your powers of intuition to guess these facts about me.`);

// Let the games begin!
let score = 0;

function yesAndNoQuestion(userAnswer){
  if(userAnswer === 'y' || userAnswer === 'yes'){
    alert('You are correct!');
    score++;
  } else if(userAnswer === 'n' || userAnswer === 'no'){
    alert('You are wrong.');
  } else{
    alert('Answer yes/no or y/n');
  }
}

// Yay! Function and array time
let userResponse = '';
const questions = ['Do I have children? (yes/no or y/n)', 'Do I have one child? (yes/no or y/n)','Is it a boy? (yes/no or y/n)','Is his favorite food asian? (yes/no or y/n)','Does he like to play video games? (yes/no or y/n)']
for (let index = 0; index < questions.length; index++) {
  userResponse = prompt(questions[index]).toLowerCase();
  yesAndNoQuestion(userResponse);
}

// varibles used for both games
let userGuess = 0;
let counter = 0;
let stillWrong = true;

// guess a number game
let answer = Math.floor(Math.random() * 100);

while (counter++ < 4 && stillWrong){
  userGuess = Number(prompt('Guess a number between 1-100.'));
  if (userGuess < answer) {
    alert('Your guess is too low.');
  } else if (userGuess > answer){
    alert('Your guess is too high.');
  } else {
    stillWrong = false;
    score++;
    alert('You are correct!');
  }
}

if (stillWrong){
  alert('The correct answer is: ' + answer);
}

//guess one of my favorite foods game
const foods = ['ramen', 'steak', 'salad', 'pizza', 'soup', 'pears', 'fries', 'pies'];
let guessLeft = 0;
let tempLeft = 0;
stillWrong = true;
while (guessLeft++ < 6 && stillWrong){
  userGuess = (prompt('Guess one of my favorite foods. (Hint: all are 4-5 characters long.)'));
  counter = 0;
  while (counter++ < foods.length-1 && stillWrong) {
    if (userGuess.toLowerCase() === foods[counter]){
      alert('Yes, I love '+ foods[counter] + '!');
      stillWrong = false;
      score++;
    }
  }
  if (stillWrong) {
    tempLeft = 6-guessLeft;
    alert( `Nope! ${tempLeft} guesses left.`);
  }
}

if (stillWrong){
  alert('Sorry, you never guessed a right answer. So I\'ll tell you all my favorite foods!');
}

// display all my yummy food
let buildStr = 'Here are all my favorite foods:\n';
for (let i = 1; i < foods.length; i++){
  buildStr += `${i}.) ${foods[i]} \n`;
}
alert(buildStr);
alert('Your final score: ' + score);
