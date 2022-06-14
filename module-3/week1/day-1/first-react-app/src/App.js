import './App.css';
import Student from './Student';

function App() {
  return (
    <>
      <h1>
        First React App
      </h1>
      <div>
        <button>Hello</button>
      </div>
      {/* <Student> </Student> */}
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
    </>
  );
}

// Behind the scenes
// React.createElement('h1', null, 'First React App')

export default App;
