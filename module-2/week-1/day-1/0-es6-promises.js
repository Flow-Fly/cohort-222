// Callback Hell
const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];


function getDirections(step, callback, errorCallback) {
  setTimeout(() => {
    console.log(directions[step]);
    if (!directions[step]) errorCallback("Instructions not found.");
    else callback();
  }, 2000);
}

// getDirections(0, () => {
//   getDirections(1, () => {
//     getDirections(2, () => {
//       getDirections(3, () =>{})
//     })
//   })
// })


// Promise definition: A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
// Promise allows us to handle asynchronous operations in a more synchronous fashion.

// Promise sintax
const promise = new Promise((resolve, reject) => {
  if(false){
    resolve();
  }
  reject();
})

promise
.then(() => {
  console.log('Promise completed!')
})
.catch(() => {
  console.error('Promise fails!')
})

// Promise states
// Pending. When a Promise gets created it is in a pending state, until it gets fulfilled or rejected.
// Fulfilled. When the resolve() is called the Promise goes to a fulfilled state.
// Rejected. When the reject() is called, or if an Error is thrown, the Promise becomes rejected.
let i = 0;
function getDirectionsPromises(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(directions[step]);
      i++;
      resolve(i);
    }, 2000);
  })
}

getDirectionsPromises(i)
.then((value) => {
  console.log('Value', value);
  // We know that the previuos function its finished
  return getDirectionsPromises(value);
})
.then((value) => {
  console.log('Value', value);
   // We know that the previuos function its finished
   return getDirectionsPromises(value);
})
.then((value) => {
  console.log('Value', value);
  // We know that the previuos function its finished
  return getDirectionsPromises(value);
})
.catch(() => console.error('Something went wrong'))


// connectToDatabase()
// .then((data) => {
//   //use data from DB inside
// })
// .catch(() => {
//   console.error('Connection fails');
// })


// Promise.all -> run some code only after multiple promises have been fulfilled