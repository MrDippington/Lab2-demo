'use strict';

var correctAnswers = 0;

// var lastName = prompt('Is my last name Williams?');
// console.log(lastName + ' is Sanders');

// lastName = lastName.toLowerCase();
// if(lastName === 'yes' || lastName === 'y'){
//   alert('No, my last name is Sanders.');
// } else {
//   correctAnswers = correctAnswers+1;
//   alert('Correct!');
// }



// var work = prompt('Do I currently work at Fedex?');
// console.log(work + ' is FedEx');

// work = work.toLowerCase();
// if(work === 'yes' || work === 'y'){
//   correctAnswers = correctAnswers+1;
//   alert('Got that right!');
// } else {
//   alert('Wrong. I do work at Fedex.');
// }



// var from = prompt('Am I from Seattle?');
// console.log(from + ' I am not from Seattle');

// from = from.toLowerCase();
// if(from === 'no' || from === 'n'){
//   correctAnswers = correctAnswers+1;
//   alert('That\'s right! I\'m from Augusta, Georgia!');
// } else {
//   alert('WRONG! I\'m from Augusta, Georgia.');
// }



// var military = prompt('Did I serve in the military?');
// console.log(military + ' I did serve in the military');

// military = military.toLowerCase();
// if(military === 'no' || military === 'n'){
//   alert('I served in the army.');
// } else {
//   correctAnswers = correctAnswers+1;
//   alert('Correct!');
// }


// var fan = prompt('Am I a Game of Thrones Fan?');
// console.log(fan + ' I am a Game of Thrones Fan');

// fan = fan.toLowerCase();
// if(fan === 'yes' || fan === 'y'){
//   correctAnswers = correctAnswers+1;
//   alert('YES! WINTER IS HERE!');
// } else {
//   alert('Incorrect.');
// }

// var faveAnswer = '6';
// var fave = prompt('What is my favorite number?');
// console.log(fave + ' My favorite number is 6');

// for(var i=1; i<4; i++){
//   if(faveAnswer === fave){
//     correctAnswers = correctAnswers+1;
//     alert('RIGHT!!!');
//     break;
//   } else if(fave < faveAnswer) {
//     fave = prompt('Guess higher.');
//   } else if(fave > faveAnswer){
//     fave = prompt('Guess Lower');
//   }
// }

var heroList = ['black panther', 'iron man', 'batman', 'spiderman', 'wolverine', 'superman'];
var hero = prompt('Can you name one of my favorite super-heroes?');
console.log(heroList + ' are my favorite super heroes');

heroList = heroList.toUpperCase();
for(var i=0; i<5; i++){
  if(hero == heroList){
    correctAnswers = correctAnswers+1;
    alert('YOU KNOW ME SO WELL!!!');
    break;
  } else {
    hero = prompt('Guess again, loser.');
  }
}

// var correctAnswers = prompt('You guessed ' + correctAnswers + ' questions right out of 6.');

// var heroList = ['Black Panther', 'Iron Man', 'Captain America', 'Spiderman', 'Doctor Strange', 'The Hulk'];
// var Avengers = prompt('Name some of my favorite Avengers heroes.');
// console.log('Favorite Avengers' + list);

// list = list.toLowerCase();


// while(i < list.length){
//   correctAnswers = correctAnswers+1;
//   list = prompt('Good. Who else?');
// } else {
//   list = prompt('Try Again.');

// }


// var correctAnswers = prompt('You guessed ' + correctAnswers + ' questions right out of 6.');



// var heroList = ['Black Panther', 'Iron Man', 'Captain America', 'Spiderman', 'Doctor Strange', 'The Hulk'];

// heroList[0]
// heroList[1]
// heroList[2]
// heroList[3]



// let heroAnswer = prompt('Fav hero bro?');

// for (var tries = 0; tries < 4; tries++){

//   for (var hero = 0; hero < 6; hero++){
//     var currentHero = heroList[i]



//   };

// };

// correct answer given code

// answer matches correct responsw

// incorrect answer


