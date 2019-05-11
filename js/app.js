'use strict';

var correctAnswers = 0;


function no(answer){
  if(answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n'){
    correctAnswers++;
    alert('Correct!');
  } else {
    alert('No, my last name is Sanders.');
  }
}

var lastName = prompt('Is my last name Williams?');
console.log(lastName + ' is Sanders');
no(lastName);

var from = prompt('Am I from Seattle?');
console.log(from + ' I am not from Seattle');
no(from);

function yes(answer){
  if(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y'){
    correctAnswers = correctAnswers++;
    alert('Got that right!');
  } else {
    alert('Wrong. I do work at Fedex.');
  }
}


var work = prompt('Do I currently work at Fedex?');
console.log(work + ' is FedEx');
yes(work);

var military = prompt('Did I serve in the military?');
console.log(military + ' I did serve in the military');
yes(military);

var fan = prompt('Am I a Game of Thrones Fan?');
console.log(fan + ' I am a Game of Thrones Fan');
yes(fan);



// from = from.toLowerCase();
// if(from === 'no' || from === 'n'){
//   correctAnswers = correctAnswers++;
//   alert('That\'s right! I\'m from Augusta, Georgia!');
// } else {
//   alert('WRONG! I\'m from Augusta, Georgia.');
// }




// military = military.toLowerCase();
// if(military === 'no' || military === 'n'){
//   alert('I served in the army.');
// } else {
//   correctAnswers = correctAnswers++;
//   alert('Correct!');
// }



// fan = fan.toLowerCase();
// if(fan === 'yes' || fan === 'y'){
//   correctAnswers = correctAnswers++;
//   alert('YES! WINTER IS HERE!');
// } else {
//   alert('Incorrect.');
// }

var faveAnswer = '6';
var fave = prompt('What is my favorite number?');
console.log(fave + ' My favorite number is 6');

for(var i=1; i<4; i++){
  if(faveAnswer === fave){
    correctAnswers = correctAnswers++;
    alert('RIGHT!!!');
    break;
  } else if(fave < faveAnswer) {
    fave = prompt('Guess higher.');
  } else if(fave > faveAnswer){
    fave = prompt('Guess Lower');
  }
}

var heroList = ['black panther', 'iron man', 'batman', 'spiderman', 'wolverine', 'the hulk'];
var hero = prompt('Can you name one of my favorite super-heroes?');
console.log(heroList + ' are my favorite super heroes');

var answer = false;

for(var n = 0; n < 6; n++){
  for(var j = 0; j < heroList.length; j++){
    if(hero.toLowerCase() === heroList[j]){
      answer = true;
    }
  }
  if(answer === false){
    hero = prompt('Guess again, loser.');
  } else if(answer === true){
    alert('YOU KNOW ME SO WELL!!!');
    correctAnswers++;
    break;
  }
 
  // if(hero.toLowerCase() === heroList[i]){
  //   correctAnswers++;
  //   alert('YOU KNOW ME SO WELL!!!');
  //   break;
  // } else {
  //   hero = prompt('Guess again, loser.');
  // }
}

// var correctAnswers = prompt('You guessed ' + correctAnswers + ' questions right out of 6.');

// var heroList = ['Black Panther', 'Iron Man', 'Captain America', 'Spiderman', 'Doctor Strange', 'The Hulk'];
// var Avengers = prompt('Name some of my favorite Avengers heroes.');
// console.log('Favorite Avengers' + list);

// list = list.toLowerCase();


// while(i < list.length){
//   correctAnswers = correctAnswers++;
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


