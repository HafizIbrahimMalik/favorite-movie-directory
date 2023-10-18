import React from 'react';

const MoviesList = ({ movies, isDarkMode }) => {
    // Sort movies by rating in descending order
    const sortedMovies = movies.slice().sort((a, b) => b.rating - a.rating);

    return (
        <div className="w-full">
            {sortedMovies.map((movie, index) => (
                <div
                    key={index}
                    className={`border-b-[3px] ${index % 2 === 0 ? 'border-green-500' : 'border-gray-500'
                        } ${isDarkMode && `shadow-2xl ring-1 ring-slate-800 shadow-xl`} shadow-sm items-center flex justify-between p-4 mb-4`}
                >
                    <div>
                        <h1 className="font-bold text-2xl">{movie.name}</h1>
                        <p>Ratings: {movie.rating}/100</p>
                    </div>

                    <p>{movie.duration} Hrs</p>
                </div>
            ))}
        </div>
    );
};

export default MoviesList;
