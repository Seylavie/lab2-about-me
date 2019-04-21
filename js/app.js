'use strict';

var queries = prompt ('Would you like to play a game to get to know me better? yes? no? not sure?').lowerCase();
console.log(queries);
var answers = ['yes','y','no','n'].lowerCase();

 if(answers === 'yes'){ 
     alert ('Let\'s play!');
 } else if ( answers ==='no'){
     alert( 'Oh dear! Maybe next time?');
      } else {
          alert ('Try it! Just for fun!');
      }  

switch(queries) {
    case'y':
    case 'yes':
        alert ('Great! Then let\'s play a game?');
        break;
    case'n':
    case'no':
        alert( 'Okay, Maybe next time?');
        break;
        default:
        alert('It couldn\'t hurt to try!');
        alert('Wanna Try?');
    case'y':
    case'yes':
        alert('Great let\'s start!');
        break;
    case'n':
    case'no':
        alert('Guess it wasn\'t meant to be!');
        break;
}

var myHobbies = ['reading', 'Watching TV','Drawing','Listening to Music','Writing', 'Travelling',
                'Dancing','Singing','Cooking','Baking','Coding','Exploring New Things','Learning New Things'];
for (var i = 0; i < myHobbies.length; i++) {
    console.log("I like to " + [i]);
}

  /*  name: "kara",
    likes: "cheese",
    height: 162,
    hobbies:["reading","writing","creative arts"],
    drives: true,
    listHobbies: function(){
      for ( var i= 0;  i < this.hobbies.length;i=1+i){
        console.log(this.hobbies[i]);
      }
      
      }for (var i = 0; i < students.length; i++) {
        if (this.students[i].height == 163) {
          console.log(students[i].name + "'s hobbies are " + students[i].hobbies);
          // this.students.listHobbies();
        }
        else console.log(students[i].name + " is not the right height" )
      }
      
        
var queries = [1,2];

if (queries=== No, NO, N, n) 
{ 
 console.log("You're right");
}