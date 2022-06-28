
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MoviesList from './components/MoviesList';
import Navbar from './components/Navbar/Navbar';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import ProfilePage from './pages/ProfilePage';
import ResultsPage from './pages/ResultsPage';

function App() {
  const loggedInUser = null;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesList />} />
        <Route path='/movies/:id' element={<MovieDetailsPage />} />
        <Route path='/profile' element={<ProfilePage loggedInUser={loggedInUser} />} />
        <Route path='/search' element={<ResultsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <footer>
        <p>Made with love in Ironhack 🔥</p>
      </footer>
    </>
  )
}

export default App;
