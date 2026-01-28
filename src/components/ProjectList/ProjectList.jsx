import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex items-start gap-4 p-4 border-b border-gray-200 last:border-b-0"
        >
          <div className="w-12 h-12 border border-gray-800 flex items-center justify-center text-gray-400 rounded text-xl hover:bg-green-400">
            X
          </div>
          <div className="project-details">
            <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
            <p className="text-gray-600 test-sm mt-1">{project.description}</p>
          </div>
        </div>
      ))}

      {projects.length === 0 && (
        <p className="p-8 text-center text-gray-500 italic">
          No projects found.
        </p>
      )}
    </div>
  );
};

export default ProjectList;
