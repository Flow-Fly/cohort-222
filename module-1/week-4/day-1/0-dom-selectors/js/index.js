// document.getElementById('');
const title = document.getElementById('page-title');
const firstSection = document.getElementById('first-section');
console.log(title);

// Change element content with .innerHTML
title.innerHTML = "DOOOOOOOOOOOM";
firstSection.innerHTML = `
  <div>
    <p>Hello Ironhackers</p>
  </div>
`;

// Change element style
title.style.color = "green";
title.style.fontSize = "38px";

firstSection.style = `
  background-color: aliceblue;
  padding: 40px;
  border: 1px solid black;
`;

// setInterval(() => {
//   title.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
// }, 1000)

// document.getElementsByClassName -> HTMLCollection
const paragraphsCollection = document.getElementsByClassName("page-p");
console.log('Collection', paragraphsCollection);
const paragraphs = [...paragraphsCollection];
console.log(paragraphs);

// document.getElementsByTagName -> HTMLCollection
const allParagraphsCollection = document.getElementsByTagName('p');

// document.querySelector -> First Found Selector
const firstP = document.querySelector('.page-p');
console.log(firstP);

// querySelectorAll -> Accessing an Array of Selectors
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);
const allParagraphsArray = [ ...allParagraphs ];
console.log(allParagraphsArray);

// .className && .id -> Get & set
console.log(title.id)
title.id = "new-page-title";
console.log(title.id)

// .classList -> Array with the class name(s) of an element
// .classList.add - .classList.remove - .classList.toggle - .classList.contains

const paragraph = document.querySelector("#p-id");
console.log(paragraph.classList);

paragraph.classList.toggle('new-class');
console.log(paragraph.classList);
paragraph.classList.toggle('new-class');
console.log(paragraph.classList);

const footer = document.querySelector('footer');
footer.querySelector('.page-p');