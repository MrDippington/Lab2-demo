'use strict';

var correctAnswers = '0';


function guessGame(answer){
  if(answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n'){
    correctAnswers++;
    alert('Correct!');
  } else if(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y'){
    alert('Incorrect!');
  } else {
    alert('Sorry. Only yes or no answers, please!');
  }
}

var lastName = prompt('Is my last name Williams?');
guessGame(lastName);
console.log(lastName + ' , my last name is Sanders');

var from = prompt('Am I from Seattle');
guessGame(from);
console.log(from + ' , I\'m from Augusta, Georgia');

var work = prompt('Do I work for UPS?');
guessGame(work);
console.log(work + ' , I work for FedEx');

var military = prompt('Did I serve in the Navy?');
guessGame(military);
console.log(military + ' , I served in the Army');

function guessThrone(answerThrone){
  if(answerThrone.toLowerCase() === 'yes' || answerThrone.toLowerCase() === 'y'){
    correctAnswers++;
    alert('YES! WINTER IS HERE!');
  } else {
    alert('Incorrect. You must join the night\'s watch.');
  }
}

var fan = prompt('Am I a fan of Game of Thrones?');
guessThrone(fan);
console.log(fan + ' I am a Game of Thrones fan');


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
}
correctAnswers = alert('You guessed ' + correctAnswers + ' questions right out of 6.');
console.log('correct answer total tallied');













