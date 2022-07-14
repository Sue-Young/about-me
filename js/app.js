'use strict';

// let siteVisitor = prompt('What is your name?');
// alert(`Welcome to my site ${siteVisitor}! Guess these facts about me.`);

// Sooooo much repeated code. NOOOOOOOOOOO! But I will bend to your wishes, Mistress.

// let questionOne = prompt('Do I have children? (yes/no or y/n)').toLowerCase();
// if(questionOne === 'y' || questionOne === 'yes'){
//   alert('You are correct!');
// //   console.log('You are correct!');
// } else if(questionOne === 'n' || questionOne === 'no'){
//   alert('You are wrong.');
// //   console.log('You are wrong.');
// } else{
//   alert('Answer yes/no or y/n');
// //   console.log('Answer yes/no or y/n');
// }

// let questionTwo = prompt('Do I have one child? (yes/no or y/n)').toLowerCase();
// if(questionTwo === 'y' || questionTwo === 'yes'){
//   alert('You are correct!');
// //   console.log('You are correct!');
// } else if(questionTwo === 'n' || questionTwo === 'no'){
//   alert('You are wrong.');
// //   console.log('You are wrong.');
// } else{
//   alert('Answer yes/no or y/n');
// //   console.log('Answer yes/no or y/n');
// }

// let question = prompt('Is it a boy? (yes/no or y/n)').toLowerCase();
// if(question === 'y' || question === 'yes'){
//   alert('You are correct!');
// //   console.log('You are correct!');
// } else if(question === 'n' || question === 'no'){
//   alert('You are wrong.');
// //   console.log('You are wrong.');
// } else{
//   alert('Answer yes/no or y/n');
// //   console.log('Answer yes/no or y/n');
// }

// question = prompt('Is his favorite food asian? (yes/no or y/n)').toLowerCase();
// if(question === 'y' || question === 'yes'){
//   alert('You are correct!');
// //   console.log('You are correct!');
// } else if(question === 'n' || question === 'no'){
//   alert('You are wrong.');
// //   console.log('You are wrong.');
// } else{
//   alert('Answer yes/no or y/n');
// //   console.log('Answer yes/no or y/n');
// }

// question = prompt('Does he like to play video games? (yes/no or y/n)').toLowerCase();
// if(question === 'y' || question === 'yes'){
//   alert(`You are correct ${siteVisitor}!`);
// //   console.log(`You are correct ${siteVisitor}!`);
// } else if(question === 'n' || question === 'no'){
// //   alert(`You are wrong ${siteVisitor}!`);
//   console.log(`You are wrong ${siteVisitor}!`);
// } else{
//   alert(`Answer yes/no or y/n, ${siteVisitor}`);
// //   console.log(`Answer yes/no or y/n, ${siteVisitor}`);
// }

// varibles used for both games
let userGuess = 0;
let counter = 0;
let score = 0;
let stillWrong = true;

// guess a number game
// let answer = Math.floor(Math.random() * 100);

// while (counter++ < 4 && stillWrong){
//   userGuess = Number(prompt('Guess a number between 1-100.'));
//   if (userGuess < answer) {
//     alert('Your guess is too low.');
//   } else if (userGuess > answer){
//     alert('Your guess is too high.');
//   } else {
//     stillWrong = false;
//     score = 1;
//     alert('You are correct!');
//   }
// }

// if (stillWrong){
//   alert('The correct answer is: ' + answer);
// }

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
