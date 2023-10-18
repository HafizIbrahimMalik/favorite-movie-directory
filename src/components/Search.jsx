import React, { useEffect, useState } from 'react';

const Search = ({ movies, setFilteredMovies, setSearched, isDarkMode }) => {
    // State to manage the search term and search results
    const [searchTerm, setSearchTerm] = useState('');
    const [, setSearchResults] = useState([]);

    // Use the useEffect hook to update search results when the search term or movies change
    useEffect(() => {
        if (searchTerm.length >= 2) {
            // Filter movies based on the search term (case-insensitive)
            const filteredMovies = movies.filter((movie) =>
                movie.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );

            // Set the search results and update the parent's state
            setSearchResults(filteredMovies);
            setFilteredMovies(filteredMovies);
            setSearched(searchTerm);
        } else {
            // Clear search results and setSearched when the search term is less than 2 characters
            setSearchResults([]);
            setSearched('');
        }
    }, [searchTerm, movies, setFilteredMovies, setSearched]);

    return (
        <div className='w-[95%] m-auto'>
            <input
                type="text"
                placeholder="Search for a movie by name"
                value={searchTerm}
                // Input field to enter the search term
                className={`bg-green-50 p-[5px] shadow-inner shadow-gray w-full border-b-[2px] border-white focus:border-gray-500 outline-none mb-[20px] ${isDarkMode && "border-gray-900 text-gray-400 ring-1 ring-slate-800 shadow-xl"} bg-${isDarkMode ? 'gray' : 'white'}-900`}

                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default Search;
