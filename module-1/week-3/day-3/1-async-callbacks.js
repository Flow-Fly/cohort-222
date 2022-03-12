// JavaScript, at its core, is a single-threaded and synchronous language
// single-threaded - only one block of code is executed at the time
// synchronous - the code gets executed line by line, from top to bottom, in the order in which they are put in

// Async functions allow us to continue executing our code while the async function is being executed in the background.
//  What this exactly means is: our users will be able to use the app while the data is loading, 
//  otherwise, our app would be irresponsive and this would cause a bad user experience.


// setTimeout() - will execute a function with a delayed time just once 


// setInterval() - will execute a function repeatedly with a fixed delayed time between each call


console.log(1);
console.log(2);
console.log(3);

setTimeout(() => {
  console.log('Timeout 1');
}, 3000); // 3s

setTimeout(() => {
  console.log('Timeout 2');
}, 2000); // 2s

setTimeout(() => {
  console.log('Timeout 3');
}, 0); // 0s

console.log(4);

let counter = 0;
const id = setInterval(() => {
  counter++;
  console.log('im an interval', counter);
  if(counter > 10){
    clearInterval(id);
  }
}, 24 * 60 * 60 * 1000) // 5s


// clearTimeout(timeoutId);


// code
// prepare your meal
// have lunch
// code
// lets do some sports

// order some food
// code
// have a shower
// prepare the room
// food is here!