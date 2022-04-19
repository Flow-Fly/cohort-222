
const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("Hello");
      reject('Something went wrong');
    }, ms);
  });

timeout(1000)
  .then(() => console.log("OK"))
  .catch((error) => console.log("ERROR", error));