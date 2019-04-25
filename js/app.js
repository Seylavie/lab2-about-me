'use strict';

// Prompt user for name
var name1 = prompt('Hello there! What is your name?').toUpperCase();

// Do something with that name
alert('Hi ' + name1 + ' glad you\'re here!');
alert(name1 + ' Would you like to play a game to get to know me better? Let\'s go!');
// Create five questions

var response1 = prompt('Was I a brownie?').toUpperCase();

if (response1 === 'YES' || response1 ==='Y') {
  alert('You\'re right! That\'s Great!');
  console.log(response1);
} else {
  alert('Sorry! You\'re wrong!');
}
alert('Ok ' + name1 + ' here\'s another question, let\'s try again!');

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
alert('Ok ' + name1 + ' here\'s another question, here we go again!');

var response4 = prompt('Did I play Need For Speed?').toUpperCase();

if (response4 === 'YES' || response4 === 'Y') {
  alert('You\'re right! It\'s a great game, a classic!');
  console.log(response4);
} else {
  alert('You\'re so cold!');
}
alert('Ok ' + name1 + ' here\'s another question, one more round!');

var response5 = prompt('Do I like pizza?').toUpperCase();

if (response5 === 'YES' || response5 === 'Y' ) {
  alert('You\'re right! Pizza! Yum!Yum!');
  console.log(response5);
} else {
  alert('You\'re so cold!');
}
alert('Thanks for playing '+ name1 +'!'+' Hope you know me a little better now!');











