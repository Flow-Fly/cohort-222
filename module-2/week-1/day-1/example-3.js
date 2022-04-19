
const timeoutHello = (ms, name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, ms);
  });
};

timeoutHello(2000, "Ines").then(h => console.log(`Say ${h}`));
console.log("Wait two seconds...");