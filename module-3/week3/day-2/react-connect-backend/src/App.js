
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import Navbar from './components/Navbar/Navbar';
import CharactersFormPage from './pages/CharactersFormPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<CharactersPage />} />
        <Route path='/create' element={<CharactersFormPage />} />
        <Route path='/:id' element={<CharacterPage />} />       
      </Routes>
    </div>
  );
}

export default App;
