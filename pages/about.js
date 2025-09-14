import React from "react";

const about = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-start justify-center py-10 px-2">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4 text-left">
          About Hunting Coder
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-left">
          Welcome to Hunting Coder! This project is a modern blog platform built
          with Next.js, designed to help you learn and share coding knowledge.
          Our goal is to make learning web development fun and accessible for
          everyone.
        </p>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4 text-left">
            Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-left">
            <li>Modern Next.js framework</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Easy navigation and clean UI</li>
            <li>Sample blog posts for learning</li>
          </ul>
        </div>
        <div className="text-gray-400 text-xs mt-12">
          &copy; 2025 Hunting Coder. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default about;
