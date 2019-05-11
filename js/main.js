// five yes or no questions with if/else statements
// normalize (.toLowerCase() or .toUpperCase()) the responses
// needs to accept yes and y or no and n

// question 6
// a question in a prompt that asks for a number
// only allows 4 guesses
// if they guess too low, tell them to guess higher
// if they guess too high, tell them to guess lower
// if they get it right, tell them
// make sure they enter numbers
// if they run out of guesses, tell them the number

'use strict'

var lifeOnMars = prompt('is there life on Mars?');
lifeOnMars = lifeOnMars.toLowerCase();

if (lifeOnMars === 'yes' || lifeOnMars === 'y'){
  alert('You are right! There is life on Mars!');
} else if(lifeOnMars === 'no' || lifeOnMars === 'n') { 
  alert('Shun the non-believer');
} else {
  alert('Please respond with yes or no');
}

var favoriteNumber = prompt('What is my favorite number?');
var myFavoriteNumber = 7;



for(var i = 0; i < 4; i++){
  if(favoriteNumber) < myFavoriteNumber){
    prompt('guess a higher number');
  } else if(favoriteNumber > myFavoriteNumber){
    prompt('guess a lower number');
  } else if(favoriteNumber === myFavoriteNumber){
    alert('good guess. My favorite number is ' + myFavoriteNumber);
    console.log('the user guess my favorite number');
  } else {
    prompt('please enter a number');
  }

}


// question 7
// a question in a prompt that asks the user to guess something in an array
// need an array of answers
// only allow 6 guesses
// if they don't get it right, tell them to guess again
// if they do get it right, tell them they got it and give all answers
// if they run out of guesses, tell them the answer
// normalize the responses

// we need to keep score and tally up the correct answers
// display the correct answers at the end
// need a variable to hold this score

var petsGuess = prompt('why don\'t you try to guess my favorite pet?');
var myPetsArray = ['tangerine', 'malaki', 'cookie'];
var j = 0;
while(j < 6){
    j++;
    for(var a = 0; a < myPetsArray.length; a++){
        if(petsGuess === myPetsArray[a]){
            alert('You got it! I have three pets named ' + myPetsArray);
        } else {
            
        }
    }





// five yes or no questions with if/else statement
// normalize (.toLowerCase() or .toUpperCase()) the responses
// needs to accept yes and y and no and n

