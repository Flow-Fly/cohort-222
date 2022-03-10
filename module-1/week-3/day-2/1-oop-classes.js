// class sintax (blueprint or template to create objects) - Student class
class Student {
  constructor(name, surname, projectResult, examResult){
    console.log('Inside Constructor');
    this.name = name;
    this.surname = surname;
    this.projectResult = projectResult;
    this.examResult = examResult;
  }

  getTotalResult(){
    const totalResult = 0.8 * this.examResult + this.projectResult * 0.2;
    return totalResult;
  }

  sayHello(){
    console.log(`Hello, Im ${this.name}`);
  }
}

const student1 = new Student("Peter", "Parker", 8, 4);
const student2 = new Student("Tom", "Holland", 3, 4.5);

console.log(student1.name, student1.getTotalResult());


// inheritance - Animal class
class Animal {
  constructor(name, age, nOfLegs){
    this.name = name;
    this.age = age;
    this.nOfLegs = nOfLegs;
  }

  run(){
    console.log('Im an animal so I can run');
  }

  birthday(){
    this.age += 1;
  }
}

const dog = new Animal("Marley", 8, 4);

console.log(dog.run());

class Human extends Animal {
  constructor(name, age, isDeveloper){
    super(name, age); // Executes parent class constructor
    this.isDeveloper = isDeveloper;
    this.nOfLegs = 2;
  }

  run(){
    super.run();
    console.log(`Because Im a Human I use my ${this.nOfLegs} legs`);
  }

  getIsDeveloper(){
    if(this.isDeveloper){
      console.log('Im developer I understand Classes')
    } else {
      console.log('Im not developer');
    }
  }
}

const ines = new Human("Ines", Math.floor(Math.random() * 30), true);

console.log(`${ines.name} - ${ines.age}`);
ines.birthday();
console.log(`${ines.name} - ${ines.age}`);
ines.getIsDeveloper();
ines.run();

// create a function that will take two humans as argument and will return the oldest one