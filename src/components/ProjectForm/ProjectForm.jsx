import React, { useState } from "react";

const ProjectForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      id: Math.random(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <section className="border-2 border-gray-800 rounded-lg p-6 bg-white shadow-sm mb-8">
      <h2 className="text-xl font-bold mb-4 text-left">Add Project</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-left font-bold mb-1 text-sm">
            Title
          </label>
          <input
            type="text"
            required
            className="w-full border border-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-left font-bold mb-1 text-sm">
            Description
          </label>
          <textarea
            required
            className="w-full border border-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="text-left">
          <button
            type="submit"
            className="bg-green border border-gray-800 text-gray-900 px-8 py-1 rounded font-medium hover:bg-blue-1
            200 transition-colors"
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProjectForm;
