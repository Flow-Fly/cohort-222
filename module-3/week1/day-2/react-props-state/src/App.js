import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import Student from './components/Student';

const studentsArray = [
  {
    name: "Student 1",
    bootcamp: "UX/UI",
    surveyDone: true
  },
  {
    name: "Student 2",
    bootcamp: "Data",
    surveyDone: true
  },
  {
    name: "Student 3",
    bootcamp: "Web dev",
    surveyDone: false
  },
]

function App() {
  const [ theme, setTheme ] = useState('light');
  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change theme</button>
      {/* <Student student={studentsArray[0]} />
      <Student student={studentsArray[1]}/>
      <Student student={studentsArray[2]}/> */}
      <Student name={studentsArray[0].name} bootcamp={studentsArray[0].bootcamp} surveyDone={studentsArray[0].surveyDone} />
      <Student name={studentsArray[1].name} bootcamp={studentsArray[1].bootcamp} surveyDone={studentsArray[1].surveyDone}/>
      <Student name={studentsArray[2].name} bootcamp={studentsArray[2].bootcamp} surveyDone={studentsArray[2].surveyDone}/>
      <Card>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, hic quae a suscipit, voluptatibus eius sunt, incidunt cupiditate sapiente vitae accusantium. Ratione, ipsa? Laudantium consequatur at tempore sint voluptatibus quos? </p>
        <button>Press</button>
      </Card>
      <Card>
       <Student />
      </Card>

      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
