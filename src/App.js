import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import MoviesList from './components/MoviesList';
import Search from './components/Search';
import logo from './images/logo.png';

function App() {
  // State variables to manage movies, filtered movies, Darkmode, and searched term
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searched, setSearched] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to add a new movie to the list
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Function to start Dark Mode for app
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`w-full min-h-screen bg-${isDarkMode ? 'gray' : 'white'}-900`}>
      {/* Header section */}
      <div className='bg-gray-500 py-2 px-0 flex items-center justify-center gap-3'>
        <div className="w-10">
          <img src={logo} alt='logo' />
        </div>
        <h1 className="text-2xl text-center text-green-500 font-bold">Favorite Movie Directory</h1>
      </div>
      <div className='w-full mt-[10px] ml-[-5px] flex justify-end'>
        <button
          onClick={toggleDarkMode}
          className={`px-2 py-1 rounded-md ${isDarkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className='flex mt-[100px] justify-center gap-20'>
        {/* Form to add a new movie */}
        <MovieForm addMovie={addMovie} isDarkMode={isDarkMode} />

        <div className="px-4  w-[38%]">
          {/* Search component */}
          <Search movies={movies} isDarkMode={isDarkMode} setFilteredMovies={setFilteredMovies} setSearched={setSearched} />

          {searched === '' ? (
            <MoviesList movies={movies} isDarkMode={isDarkMode} />  // Show all movies when the search is empty
          ) : searched && filteredMovies.length === 0 ? (
            <p>No record found!</p>  // Show "no record found" when no matches are found
          ) : (
            <MoviesList movies={filteredMovies} isDarkMode={isDarkMode} />  // Show matching movies
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
