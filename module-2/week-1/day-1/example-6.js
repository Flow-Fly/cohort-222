// QUIZ

function timeout(ms, letter) {
  return new Promise((resolve) => {
    // Sync
    console.log("bye1" + letter);
    setTimeout(() => {
      resolve();

      //SYNC
      console.log("bye2" + letter);
    }, ms);
    // Sync
    console.log("hello1" + letter);
  });
}

timeout(140, "A").then(() => console.log("helloAA"));
timeout(100, "B").then(() => console.log("helloBB"));

/*
Solution

bye1A
hello1A
bye1B
hello1B
bye2B
helloBB
bye2A
helloAA

*/

/*

Laia

bye1B
hello1B
bye2B
helloBB
bye1A
hello1A
bye2A
helloAA

*/

/*

Joao - Lukas

bye1A
hello1A
bye2A
helloAA
bye1B
hello1B
bye2B
helloBB

*/


/*
Maria

hello1B
bye1b
bye2b
helloBB
hello1A
bye1A
bye2A
helloAA


*/


