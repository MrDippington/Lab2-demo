

var userName = prompt('Greetings, classmate. What\'s your name?');
console.log();

alert('Thank you, ' + userName + '! Welcome to my page!');



var firstName = prompt('Do you remember my first name?');
console.log(firstName + 'Ryan');

firstName = firstName.toLowerCase();
if(firstName === 'ryan'){
  alert('Nice! I am honored that you remember my name!');
} else {
  alert('Incorrect, ' + userName + ', but that\'s ok. I\'m not good with names either. My first name is Ryan.');
}



var work = prompt(userName + ', do I currently work at Fedex or UPS?')
console.log(work + 'FedEx');

work = work.toLowerCase();
if(work === 'fedex'){
  alert('Man, you have a great memory!');
} else {
  alert('Nope, but it\'s cool, ' + userName + '. I work at Fedex.');
}



var from = prompt('For the next few questions, please answer Yes or No. Am I from Seattle, Washington, ' + userName + '?');
console.log();

from = from.toLowerCase();
if(from === 'no'){
  alert('That\'s right! I\'m from Augusta, Georgia, ' + userName + '!');
} else {
  alert('WRONG, ' + userName + '! I\'m from Augusta, Georgia.');
}



var military = prompt('Did I serve in the military, ' + userName + '?')
console.log();

military = military.toLowerCase();
if(military === 'no'){
  alert('Now that was an easy one, ' + userName + "! I did.");
} else {
  alert('Correct, ' + userName + '!');
}



var service = prompt('What branch did I serve in, ' + userName + '? Army, or Navy?')
console.log();

service = service.toLowerCase();
if(service === 'army'){
  alert('Right you are, ' + userName + '!');
} else {
  alert('Oh no, ' + userName + '. I was in the army.');
}
