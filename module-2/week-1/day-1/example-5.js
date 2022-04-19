const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done!");
      resolve();
    }, ms);
    reject(new Error("invalid"));
  });

timeout(1000)
  .then(() => console.log("OK"))
  .catch((e) => console.log("ERROR", e));