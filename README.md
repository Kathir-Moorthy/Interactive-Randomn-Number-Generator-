# Interactive Random Number Generator App

This is a simple React-based **Interactive Random Number Generator App**. The app allows users to generate random numbers within a specified range, filter them as odd or even, and add them to favorites. It also includes a theme toggle (light/dark mode) for a customized experience.

## Features

- Generate random numbers within a specified range.
- Filter numbers by **odd**, **even**, or **any**.
- Save favorite numbers for later use.
- Light and Dark Mode support for a personalized theme.
- History of generated numbers.
- User-friendly UI with React Icons for better interaction.

---

## Demo

[Watch the demo here](#)  
(Include a demo link if available)

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [License](#license)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kathir-Moorthy/Interactive-Randomn-Number-Generator
2. Navigate into the project directory:
   ```bash
   cd Interactive-Randomn-Number-Generator
3. Install the dependencies:
   ```bash
   npm install
4. Run the app
   ```bash
   npm start

## Project Structure

The project is structured as follows:

| Folder/File          | Description                                                       |
|----------------------|-------------------------------------------------------------------|
| `public/`            | Contains static files like `index.html` and `logo.png`.           |
| `public/index.html`  | Main HTML file where the React app is injected.                   |
| `public/logo.png`    | The app's logo image used in the UI.                               |
| `src/`               | Contains the source code of the app.                              |
| `src/components/`    | Contains all React components used in the app.                    |
| `src/App.js`         | Main React component that initializes the app.                    |
| `src/index.js`       | Entry point for the React app.                                    |
| `src/Randomn.css`    | Styles for the app.                                               |
| `package.json`       | Manages dependencies and scripts.                                 |
| `README.md`          | Project documentation.                                            |
| `.gitignore`         | Git ignore configuration.                                         |

This structure ensures a clean separation between static assets (`public/`) and source code (`src/`).


Usage
1. Set a range: Enter your Min and Max values to define the range for generating random numbers.
2. Generate numbers: Click on the Generate Random Number button to generate a number within the defined range.
3. Filter numbers: Choose between Even, Odd, or Any numbers to filter your results.
4. Save to Favorites: Click the Favorite button to save a generated number to your favorites list.
5. Switch modes: Toggle between Light Mode and Dark Mode to customize the app's theme.
      
Tech Stack
1. React - Frontend framework for building the UI.
2. React Icons - Used for interactive icons (e.g., random number, star, toggle).
3. CSS - Custom styles for app layout and theme.
