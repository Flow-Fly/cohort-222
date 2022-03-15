// getAttribute - Get the attribute from an element
const link = document.querySelector('#page-link');
console.log(link.getAttribute('id'));

// setAttribute - Set the attribute from an element
link.setAttribute('href', 'https://tailor-hub.com');

// removeAttribute - Revome the attribute from an element
link.removeAttribute('href');

// document.createElement('element')
const students = [
  {
    name: "Student 1",
    age: 35
  },
  {
    name: "Student 2",
    age: 24
  }
]
const list = document.querySelector('#student-list');
const printStudents = () => {
  list.innerHTML = ""; // Clean the list
  students.forEach(student => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `Name: ${student.name} - Age: ${student.age} <button class="delete-button">Delete</button>`;
    list.appendChild(newLi); // .preppend()
    
    const buttonsCollection = document.querySelectorAll('.delete-button');
    const buttons = [ ...buttonsCollection ];
    buttons.forEach(but => {
      but.addEventListener('click', (event) => {
        console.log(event.target);
        event.target.parentNode.remove();
      })
    })
  })
}

const cleanInputs = () => {
  const nameInput = document.querySelector('#name-input');
  const ageInput = document.querySelector('#age-input');
  nameInput.value = "";
  ageInput.value = "";
  nameInput.classList.remove('error-input');
  ageInput.classList.remove('error-input');
}

printStudents();

const button = document.querySelector('#create-button');
button.addEventListener('click', (event) => {
  event.preventDefault(); // Avoid default behaviour
  const nameInput = document.querySelector('#name-input');
  const ageInput = document.querySelector('#age-input');

  // nameInput.value !== "" && ageInput.value !== ""
  if(nameInput.value && ageInput.value) {
    const student = {
      name: nameInput.value,
      age: ageInput.value
    }
  
    students.push(student);
    printStudents();
    cleanInputs();
  } else {
    nameInput.classList.add('error-input');
    ageInput.classList.add('error-input');
  }
})