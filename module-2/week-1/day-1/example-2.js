const timeout = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

console.log("Ready....");
timeout(2000).then(() => console.log("Go!"));
console.log("YAY!!!");