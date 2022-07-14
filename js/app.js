'use strict';

let siteVisitor = prompt('What is your name?');
alert(`Welcome to my site ${siteVisitor}! Guess these facts about me.`);

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

// guess a number game
let userGuess, counter = -1;
let answer = Math.floor(Math.random() * 100);
let stillWrong = true;
while ( counter++ < 4 && stillWrong ){
  console.log(`counter ${counter}`)
  userGuess = Number(prompt('Guess a number between 1-100.'));
  if (userGuess < answer) {
    alert('Your guess is too low.');
  } else if (userGuess > answer){
    alert('Your guess is too high.');
  } else {
    stillWrong = false;
    alert('You are correct!');
  }
}

if (stillWrong){
  alert('The correct number is: ' + answer);
}
