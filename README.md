# Personal Project Showcase App

A clean, responsive single-page application (SPA) built with React and Tailwind CSS. This application allows users to manage a portfolio of projects by adding new entries, searching through them, and deleting them.

## Features

- **Add Projects:** Users can input a project title and description to add it to the list.
- **Search Functionality:** Real-time filtering of projects by title.
- **Delete Projects:** Easily remove projects from the list with a single click.
- **Responsive Design:** Styled with Tailwind CSS for a modern, clean look that works on all screen sizes.
- **Input Validation:** Prevents adding empty projects using HTML5 validation.

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS (v4)
- **State Management:** React `useState` Hook

## Installation & Setup

Follow these steps to run the project locally on your machine.

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder-name>
```

2. Install Dependencies
   Make sure you are in the correct folder (where package.json is located).

Bash
npm install

3. Run the Development Server
   npm run dev

Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173).

## Project Structure

src/
├── components/
│ ├── Header/
│ │ └── Header.jsx # App title and header styling
│ ├── ProjectForm/
│ │ └── ProjectForm.jsx # Input form to add new projects
│ ├── ProjectList/
│ │ └── ProjectList.jsx # Renders the list of projects
│ └── SearchSection/
│ └── SearchSection.jsx # Search bar input
├── App.jsx # Main application logic (State & Handlers)
├── App.css # Global styles & Tailwind import
└── main.jsx # Entry point

## Styling

This project uses Tailwind CSS v4.

App.css: Contains the @import "tailwindcss"; directive and global body styles.

Components: All styling is handled via utility classes (e.g., w-full, border, p-4) directly in the JSX files.

## Contributing

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Author: @Sandra
