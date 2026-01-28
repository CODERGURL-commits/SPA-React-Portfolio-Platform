import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import ProjectForm from "./components/ProjectForm/ProjectForm.jsx";
import ProjectList from "./components/ProjectList/ProjectList.jsx";
import SearchSection from "./components/SearchSection/SearchSection.jsx";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "A React App." },
    { id: 2, title: "Project 2", description: "A Tailwindcss Showcase" },
    { id: 3, title: "Project 3", description: "A Business Portfolio" },
  ]);

  const [searchTerm, setSearchTerm] = useState(" ");

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className=" min-h-screen bg-white text-gray-900 p-8">
      <Header />

      <main className="mt-8">
        <ProjectForm onAdd={addProject} />

        <div className="border-2 border-gray-800 p-3 rounded-lg overflow-hidden mt-8">
          <SearchSection Term={searchTerm} setTerm={setSearchTerm} />
          <ProjectList projects={projects} searchTerm={searchTerm} />
        </div>
      </main>
    </div>
  );
}

export default App;
