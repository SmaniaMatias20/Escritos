import React from 'react';

// Writing component: displays a single writing piece
function Writing({ title, description, date }) {
    return (
        <div className="mx-auto p-6 m-4 border rounded-xl border-black dark:border-white bg-white dark:bg-[#1f0148] text-gray-800 dark:text-white transform transition duration-300 ease-in-out hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">Published on: {date}</p>
        </div>
    );
}

export default Writing;
