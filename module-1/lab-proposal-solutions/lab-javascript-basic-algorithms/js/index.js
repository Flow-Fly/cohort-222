// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "abaa";
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "aaaa";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!.`
  );
}

// Iteration 3: Loops

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let capitalizedDriversName = "";

for (let i = 0; i < hacker1.length; i++) {
  capitalizedDriversName += hacker1[i].toUpperCase() + " ";
}

console.log(capitalizedDriversName);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reversedNavigatorsName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigatorsName += hacker2[i];
}
console.log(reversedNavigatorsName);

let shortestName;
if (hacker1.length > hacker2.length) {
  shortestName = hacker2;
} else if (hacker1.length < hacker2.length) {
  shortestName = hacker1;
} else {
  shortestName = hacker1;
}

let sameName = true;
let biggestName = "";

for (let i = 0; i < shortestName.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    sameName = false;
    biggestName = hacker1;
    break;
  } else if (hacker1[i] > hacker2[i]) {
    sameName = false;
    biggestName = hacker2;
    break;
  }
}

if (sameName && hacker1.length === hacker2.length) {
  console.log("What?! You both have the same name?");
} else if (
  (sameName && hacker1.length < hacker2.length) ||
  (!sameName && biggestName === hacker1)
) {
  console.log("The driver's name goes first.");
} else if (
  (sameName && hacker1.length > hacker2.length) ||
  (!sameName && biggestName === hacker2)
) {
  console.log("Yo, the navigator goes first definitely.");
}

// Bonus 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu odio ultricies, malesuada eros id, consequat dui. Nulla facilisi. Aenean nec efficitur augue, id rhoncus velit. Duis elementum vestibulum libero ac aliquam. Nunc quis rutrum lorem. Morbi tempus risus mattis sodales ultricies. Maecenas feugiat porttitor tincidunt. Praesent cursus dapibus metus id luctus. Sed rhoncus mi sit amet quam bibendum, et ullamcorper risus pharetra. Nam pulvinar nibh aliquet, convallis nulla ac, volutpat risus. Donec mattis mi a orci venenatis, a rutrum nunc vulputate. Etiam porttitor facilisis scelerisque. Etiam luctus arcu at turpis ultrices vulputate. Aliquam tincidunt vitae ante id fringilla.
Duis venenatis ligula et ante elementum, ac tempor sapien laoreet. Maecenas eu tellus ac diam luctus laoreet nec in est. Curabitur sodales sit amet velit quis aliquam. Nunc imperdiet, lacus nec lacinia ornare, arcu neque viverra augue, sit amet vulputate eros dui vitae ex. Praesent quis purus eu mi volutpat auctor id sed nunc. Donec a quam vitae lectus dapibus ullamcorper. Cras egestas sit amet ligula vel aliquet. Etiam tortor turpis, maximus non neque sit amet, interdum auctor turpis. Aliquam venenatis quam nibh, facilisis egestas erat vestibulum quis. Duis feugiat posuere erat, quis aliquet enim elementum id. Pellentesque at posuere ligula.
Vivamus sollicitudin libero sit amet orci porta pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras luctus accumsan placerat. Nunc pretium turpis non elit mollis convallis. Donec non condimentum quam. Proin vestibulum lobortis diam a malesuada. Cras non odio vel odio pretium varius. Fusce condimentum, dui id maximus pretium, nisi lorem pharetra turpis, a imperdiet urna dui ut sem. Etiam tristique vulputate purus, non congue tellus sagittis a. Integer eleifend egestas diam.`;

let wordCount = 0;
let carriageReturnCount = 0;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === " " || lorem[i] === "\n") {
    wordCount++;
  }
  if (lorem[i] === "\n") {
    carriageReturnCount++;
  }
}
/*
    Since we increment the wordCount by 1 everytime there is a space, the last word will not be taken into account.
    This is the reason why we add 1 to the wordCount.
    Since we count words when there are carriageReturns > "\n".
    There is one at the end of each paragraph, and one to skip a line, making it 2 for 1 word. So this is why we substract
    the carriageReturnCount divided by 2 to get rid of the extra counts we made previously.
  */
let finalWordCount = wordCount + 1 - carriageReturnCount / 2;
console.log(finalWordCount);

// Solution n°2 using regex and string method
// console.log(lorem.split(/\s+/g).length);

// Bonus 2

/*
    This solution might not be the most optimized solution,
    but it's the simplest to understand.
    What we want to do is first "clean" the phrase (get rid of all the special characters).
    Then we want to reverse the phrase.
    If at any point the the letters are not equal to each other when we loop
    over both cleaned and reversed phrases, it means it isnt a palindrome,
    otherwise it is :).

    One way of cleaning the string from special characters is to use the string method .replace()
    with a regex 
    eg: myString.replace(/\W+/g, "") will replace any special character with an empty string
    
*/

let phraseToCheck = "Mr.Owl Ate My Metal Worm";
let cleanedPhraseToCheck = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  let letter = phraseToCheck[i].toLowerCase();
  // There are obviously more characters to get rid of if you want to make it perfect.
  if (
    letter === " " ||
    letter === "," ||
    letter === "!" ||
    letter === "?" ||
    letter === "'" ||
    letter === "."
  ) {
    continue;
  } else {
    cleanedPhraseToCheck += letter;
  }
}

let cleanedPhraseToCheckReversed = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  var letter = phraseToCheck[i].toLowerCase();
  if (
    letter === " " ||
    letter === "," ||
    letter === "!" ||
    letter === "?" ||
    letter === "'" ||
    letter === "."
  ) {
    continue;
  } else {
    cleanedPhraseToCheckReversed += letter;
  }
}

let isPalindrome = true;

for (let i = 0; i < cleanedPhraseToCheck.length; i++) {
  if (cleanedPhraseToCheck[i] !== cleanedPhraseToCheckReversed[i]) {
    isPalindrome = false;
  }
}

if (isPalindrome) {
  console.log("The phrase is a palindrome !");
} else {
  console.log("The phrase isn't a palindrome :(");
}

// Solution n°2 using regex and string methods

// const parsedPhrase2 = phraseToCheck
//   .replace(/\W+/g, "")
//   .toLowerCase()
//   .split("")
//   .reverse()
//   .join("");

// if (parsedPhrase2 === parsedPhrase) {
//   console.log("It is a palindrome !");
// } else {
//   console.log("It is not a palindrome :(");
// }
