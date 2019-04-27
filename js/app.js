'use strict';

// Prompt user for name
var name1 = prompt('Hello there! What is your name?').toUpperCase();

// Do something with that name
alert('Hi ' + name1 + ' glad you\'re here!');
alert(name1 + ' let\'s play a game to get to know me better? Let\'s go!');
// Create five questions

var response1 = prompt('Was I a brownie?').toUpperCase();

if (response1 === 'YES' || response1 ==='Y') {
  alert('You\'re right! That\'s Great!');
  console.log(response1);
} else {
  alert('Sorry! You\'re wrong!');
}
alert('Ok ' + name1 + ' here\'s another question!');

var response2 = prompt('Did I go to Scotland?').toUpperCase();
if (response2 === 'YES' || response2 ==='Y') {
  alert('You\'re right!');
  console.log(response2);
} else {
  alert('Sorry! You\'re wrong!');
}
alert('Ok ' + name1 + ' here\'s another question, let\'s try again!');

var response3 = prompt('Can I drive a car?').toUpperCase();

if (response3 === 'NO' || response3 === 'N') {
  alert('You\'re right! You know me so well!');
  console.log(response3);
} else {
  alert('You\'re so cold!');
}
alert('Ok ' + name1 + ' here we go again!');

var response4 = prompt('Did I play Need For Speed?').toUpperCase();

if (response4 === 'YES' || response4 === 'Y') {
  alert('You\'re right! It\'s a great game, a classic!');
  console.log(response4);
} else {
  alert('You\'re so cold!');
}
alert('Ok ' + name1 + ' one more try!');

var response5 = prompt('Do I like pizza?').toUpperCase();

if (response5 === 'YES' || response5 === 'Y' ) {
  alert('You\'re right! Pizza! Yum!Yum!');
  console.log(response5);
} else {
  alert('You\'re so cold!');
}
alert('Great '+ name1 +'!'+' I think you know me a little better now! Just one more question');
var luckyNum = 7;
var count = 0;
do {
//define
  var response6 = parseInt(prompt('What is my lucky number?'));
  
  console.log(response6);
  
  // If using === must use parseInt() otherwise use ==
  if (response6 === luckyNum){
    alert(name1 + ' You\'re right!');
    console.log('Test pass');
  }else if( response6 < luckyNum){
    alert('You\'re too low!');
    console.log('test fail, too low');
  } else {
    alert('You\'re too high!');
    console.log('test fail, too high');
  }
  console.log("old" + count);
  count += 1; 
  console.log("new" + count);
  
// count++ alternatively count = count + 1
} while( count < 4 && response6 !== luckyNum);
alert(name1 + ' Thank you for playing the game!');




// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user 
// to guess a number (for instance, “What is my favorite number?” or “How many Pokémon did I catch this week?”), and

//  indicates to the user whether the guess is “too high” or “too low”, and gives the user exactly four opportunities to get
// the correct answer, so that my fancy programming skills are showcased.----

//ask a question that requires a number as an answer
//Define answer



//

/*var response6 = (7)
if( response ===7){
alert(console.log("Correct"));
} else if (response > 7);
alert(console.log)
for(var = o; i===7; i++);
alert*/











