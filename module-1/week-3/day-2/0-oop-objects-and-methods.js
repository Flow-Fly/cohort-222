//  Official definition of object-oriented programming (OOP) is that it is a programming paradigm based on the concept of “objects”,
//  which can contain data, in the form of fields (often known as attributes), 
//  and code, in the form of procedures (often known as methods).

// Declare an object
const student1 = {
  name: "Peter",
  surname: "Parker",
  projectResult: 8,
  examResult: 5,
  getTotalResult(){
    console.log(this);
    const totalResult = 0.8 * this.examResult + this.projectResult * 0.2;
    return totalResult;
  },
  sayHello(){
    console.log(`Hello, Im ${this.name}`);
  }
}

const student2 = {
  name: "Tom",
  surname: "Holland",
  projectResult: 3.5,
  examResult: 2,
  getTotalResult(){
    console.log(this);
    const totalResult = 0.8 * this.examResult + this.projectResult * 0.2;
    return totalResult;
  },
  sayHello(){
    console.log(`Hello, Im ${this.name}`);
  }
}

console.log(student1.name, student1.getTotalResult());
console.log(student1.sayHello());

const students = [student1, student2];
// Create a function that receive an array of students and returns an array with the students name
function getStudentsNames(studentsArray){
  const names = studentsArray.map((student) => {
    return student.name
  })
  return names;
}

console.log(getStudentsNames(students));

// Create a function that receive an array of students and returns an array with the students that have passed the subject
const passingStudents = (studentsArray) => {
  const filterResult = studentsArray.filter((student) => {
    if(student.getTotalResult() >= 5){
      // filterResult.push(student);
      return true;
    } else {
      return false;
    }
    // return student.getTotalResult() >= 5
  })

  return filterResult;
}

console.log(passingStudents(students));

// Create a function that receive an array of students and returns a new array with the students results sorted by mark (ascending)
const getStudentsResult = (studentsArray) => {
  const results = studentsArray.map((student) => {
    return student.getTotalResult();
  });

  return results.sort((a, b) => {
    return a - b;
  })
}

console.log(getStudentsResult(students));

// Create a function that receive an array of students and returns the results average
const getResultsAverage = (studentsArray) => {
  const totalResult = studentsArray.reduce((acc, student) => {
    return acc += student.getTotalResult();
  }, 0);
  return totalResult / studentsArray.length;
}

console.log(getResultsAverage(students));