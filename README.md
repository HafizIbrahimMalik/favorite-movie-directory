# Movie Directory Application

This is a React-based movie directory application that allows users to add, list, and search for movies. It includes three core components: MovieForm, MoviesList, and Search. The application is styled using Tailwind CSS and supports both dark and light modes.

## Project Overview

The application consists of the following components:

1. **MovieForm Component:** Allows users to enter movie data with the following fields:
   - Movie Name (string)
   - Ratings (0-100)
   - Duration (in hours 'h' or minutes 'm', e.g., 2.5h or 150m)

2. **MoviesList Component:** Displays movie data sorted by duration in descending order in the following format:
   - Movie Name
   - Ratings: {ratings}/100
   - Duration Hrs

3. **Search Component:** Allows users to filter existing movies by entering at least 2 characters at the beginning of the movie name. If no matches are found, a 'No Results Found' message is displayed.

Each movie object in the MoviesList has the following properties:
- name: The name of the movie (string)
- rating: The rating of the movie in the range of 0 to 100 (number)
- duration: The duration of the movie in hours (string)

## Styling with Tailwind CSS

The application is styled using Tailwind CSS, a popular utility-first CSS framework. Tailwind CSS provides a flexible and highly customizable way to design your user interface. You can find the Tailwind CSS configuration and styles in the project's source files.

## Dark-Light Mode

The application supports both dark and light modes to enhance the user experience. Users can switch between modes using a button or a toggle switch. This feature is implemented to make the application visually appealing and comfortable for users in different lighting environments.

## Usage

To use this application, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Start the development server with `npm start`.
4. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Functionality

- Clicking the "Add Movie" button:
  - Validates input fields:
    - If the duration format is invalid, an alert message is displayed: 'Please specify the time in hours or minutes (e.g., 2.5h or 150m)'. This error message is cleared when typing into any input field.
    - If all input fields are filled with valid values, a new movie is added to the list.
    - If the duration is entered in minutes, it is converted to hours (e.g., 90m is displayed as '1.5 Hrs').

## Technologies Used

- React
- JavaScript
- HTML/CSS
- Tailwind CSS

## Author

Hafiz Muhammad Ibrahim
