'use strict';

// Prompt user for name
var name = prompt('What is your name?').toUpperCase();

// Do something with that name
alert('Hi ' + name + ' glad you\'re here!');
alert('Would you like to play a game to get to know me better? Let\'s go!');
// Create five questions

var response = prompt('Was I a brownie?').toUpperCase();
var score = 0;

if (response === 'YES') {
  alert('You\'re right!');
  console.log(response);
  score++;
  alert('You\'re score is: ' + score);
} else {
  alert('You\'re so cold!');
}
















// Create five questions
// var questions = ['Was I a brownie?', 'Did I go to Scotland?', 'Can I drive a car?', 'Did I play Need For Speed?', 'Do I like pizza?'];


// Create five answers
// var answers = ['yes', 'yes', 'no', 'yes', 'yes']

// For each question 
// a) Ask Question, 
// b) Convert input to same as answer 
// c) if answer matches input (i) output correct (ii) log correct (iii) (iv) increment correct score
//  else (i) output wrong










t





// var queries = prompt ('Would you like to play a game to get to know me better? yes? no? not sure?').lowerCase();
// console.log(queries);
// var answers = ['yes','y','no','n'];
// var response = prompt ('')
//  if(answers === 'yes'){ 
//      alert ('Let\'s play!');
//  } else if ( answers ==='no'){
//      alert( 'Oh dear! Maybe next time?');
//       } else {
//           alert ('Try it! Just for fun!');
//       }  

// switch(queries) {
//     case'y':
//     case 'yes':
//         alert ('Great! Then let\'s play a game?');
//         break;
//     case'n':
//     case'no':
//         alert( 'Okay, Maybe next time?');
//         break;
//         default:
//         alert('It couldn\'t hurt to try!');
//         alert('Wanna Try?');
//     case'y':
//     case'yes':
//         alert('Great let\'s start!');
//         break;
//     case'n':
//     case'no':
//         alert('Guess it wasn\'t meant to be!');
//         break;
// }

// var myHobbies = ['reading', 'Watching TV','Drawing','Listening to Music','Writing', 'Travelling',
//                 'Dancing','Singing','Cooking','Baking','Coding','Exploring New Things','Learning New Things'];
// for (var i = 0; i < myHobbies.length; i++) {
//     console.log("I like to " + [i]);
// }