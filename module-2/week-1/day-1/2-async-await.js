
const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];


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

// getDirectionsPromises(i)
// .then((value) => {
//   console.log('Value', value);
//   // We know that the previuos function its finished
//   return getDirectionsPromises(value);
// })
// .then((value) => {
//   console.log('Value', value);
//    // We know that the previuos function its finished
//    return getDirectionsPromises(value);
// })
// .then((value) => {
//   console.log('Value', value);
//   // We know that the previuos function its finished
//   return getDirectionsPromises(value);
// })
// .catch(() => console.error('Something went wrong'))

// async/await

const getAllDirections = async () => {
  try {
    const result = await getDirectionsPromises(0); // this replace the then block
    console.log('RESULT', result);
    await getDirectionsPromises(1);
    await getDirectionsPromises(2);
    await getDirectionsPromises(3);
  } catch (error) {
    // If some promise is rejected
  }

  console.log('ASYNC/AWAIT');
}

getAllDirections();

