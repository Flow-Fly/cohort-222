const timeout = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const example = async () => {
  console.log("Ready....");
  await timeout(2000);
  console.log(`Go!`);
  console.log("YAY!!!");
}

example();