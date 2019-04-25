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
  alert('You\'re right! You know me so well! :\)');
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
/*As a student, I want to create an About Me page as a demonstration of my skills with HTML.
As an eventual jobseeker, I want to get practice in creating a portfolio page so that I can 
make myself appealing to potential employers.
As an eventual jobseeker, I would like for potential employers to quickly learn a few things about me, 
such as a short bio, my education, an overview of my job experience, and my goals.
As a fun-loving human being, I want to give the visitors to my About Me page a guessing game that shows
 how fun-loving and interesting I am, and maybe include things about myself that would not ordinarily appear in a portfolio page.
As a developer, I want to use markup to structure my index.html page, so the layout is in the order of
 assembly I prefer, with effective use of the markup possibilities offered by HTML.
As a developer, I want to carefully design my scripts, so I can understand how to organize and 
write my code to achieve my goals in interactivity.
As a developer, I want to create a simple script for my index.html page using JavaScript, so that 
I can use the browser to send a response to the user.
As a developer, I want to receive and use the user’s name, so that the program is personalized to their experience.
As a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me.
As a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers.
As a developer, I want to be able to debug my code by using well structured console messages.
As a developer, I want to manage my code through an online version control system, so I have the ability
 to work with others, manage my revisions, and keep a thorough record of my progress.*/










