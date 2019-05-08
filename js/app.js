'use strict'
var userName = prompt('Greetings, classmate. What\'s your name?');
console.log();

alert('Thank you for telling me you name, ' + userName + '!');

var firstName = prompt('Do you remember my first name?');
console.log(firstName + 'Ryan');

firstName = firstName.toLowerCase();
if(firstName === 'ryan'){
  alert('Nice! I am honored that you remember my name!');
} else {
  alert('That\'s ok. I\'m not good with names either. My first name is Ryan.');
}

var work = prompt(userName + ', do you remember where I currently work?')
console.log(work + 'FedEx');

work = work.toLowerCase();
if(work === 'fedex'){
  alert('Man, you have a great memory!');
} else {
  alert('It\'s cool, ' + userName + '. I work at Fedex.');
}






