import React, { useState } from 'react';

const MovieForm = ({ addMovie, isDarkMode }) => {
    // State variables to manage form inputs and error message
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [duration, setDuration] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle the "Add Movie" button click
    const handleAddMovie = () => {
        // Check if any of the required fields are missing
        if (!name || !rating || !duration) {
            setErrorMessage('All fields are required');
            return;
        }

        // Validate the format of the duration input
        if (!/^\d+(\.\d{1,2})?h$|^\d+m$/.test(duration)) {
            setErrorMessage('Please specify time in hours (e.g., 2.5h) or minutes (e.g., 150m)');
            return;
        }

        // Convert duration to hours if it's in minutes
        const parsedDuration = duration.endsWith('m') ? (parseFloat(duration) / 60).toFixed(2) + 'h' : duration;

        // Call the addMovie function with the new movie data
        addMovie({
            name,
            rating: parseInt(rating, 10),
            duration: parsedDuration,
        });

        // Clear form fields
        setName('');
        setRating('');
        setDuration('');
    };

    // Function to clear the error message
    const clearErrorMessage = () => {
        setErrorMessage('');
    };

    return (
        <div className={`p-4 pb-10 shadow-lg flex xs:w-[90%] xs:m-auto flex-col lg:w-[38%] md:w-[38%] h-max-content ${isDarkMode ? 'bg-slate-700' : 'bg-white-900'}`}>
            <label htmlFor="movieName">Movie Name</label>
            <input
                className={`bg-green-50 p-[5px] shadow-inner border-b-[2px] border-white focus:border-gray-500 outline-none mb-[10px] ${isDarkMode && "border-gray-900 text-gray-400 ring-1 ring-slate-800 shadow-xl"} bg-${isDarkMode ? 'gray' : 'white'}-900`}
                type="text"
                id="movieName"
                placeholder='Enter Movie Name'
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    clearErrorMessage(); // Clear error message when typing
                }}
            />
            <label htmlFor="movieRating">Ratings (0-100)</label>
            <input
                className={`bg-green-50 p-[5px] shadow-inner border-b-[2px] border-white focus:border-gray-500 outline-none mb-[10px] ${isDarkMode && "border-gray-900 text-gray-400 ring-1 ring-slate-800 shadow-xl"} bg-${isDarkMode ? 'gray' : 'white'}-900`}
                type="number"
                id="movieRating"
                placeholder='Enter Rating on a scale of 1 to 100'
                value={rating}
                min={0}
                max={100}
                onChange={(e) => {
                    setRating(e.target.value);
                    clearErrorMessage(); // Clear error message when typing
                }}
            />
            <label htmlFor="movieDuration">Duration</label>
            <input
                className={`bg-green-50 p-[5px] shadow-inner border-b-[2px] border-white focus:border-gray-500 outline-none mb-[20px] ${isDarkMode && "border-gray-900 text-gray-400 ring-1 ring-slate-800 shadow-xl"} bg-${isDarkMode ? 'gray' : 'white'}-900`}
                type="text"
                id="movieDuration"
                placeholder='Enter duration in hours or minutes'
                value={duration}
                onChange={(e) => {
                    setDuration(e.target.value);
                    clearErrorMessage(); // Clear error message when typing
                }}
            />
            {errorMessage === 'All fields are required' &&
                <p className="text-red-500 bg-red-200 border border-red-500 rounded p-2 flex gap-[2px] items-center">
                    {errorMessage}
                </p>} {errorMessage === 'Please specify time in hours (e.g., 2.5h) or minutes (e.g., 150m)' && (
                    <p className="text-red-500 bg-red-200 border border-red-500 rounded p-2 flex gap-[2px] items-center">
                        <span>
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1.2em"
                                width="1.2em"
                            >
                                <path d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2" />
                            </svg>
                        </span>
                        {errorMessage}
                    </p>
                )}
            <div className='flex justify-end'>
                <button className={`${isDarkMode ? "bg-gray-500 shadow-gray-600 text-black" : "bg-green-600 shadow-green-100 text-white"} active:shadow-none font-semibold py-2 px-4 mt-2 shadow-lg`} onClick={handleAddMovie}>
                    Add Movie
                </button>
            </div>
        </div >
    );
};

export default MovieForm;
