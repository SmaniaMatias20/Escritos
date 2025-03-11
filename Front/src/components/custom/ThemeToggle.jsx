import React from 'react';
import { Sun, Moon } from 'lucide-react'; // Importamos los íconos Sun y Moon

const ThemeToggle = ({ onClick, isDarkMode }) => {
    return (
        <button
            onClick={onClick}
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg flex items-center justify-center"
        >
            {isDarkMode ? (
                <Moon className="h-6 w-6" /> // Ícono de luna cuando está en modo oscuro
            ) : (
                <Sun className="h-6 w-6" /> // Ícono de sol cuando está en modo claro
            )}
        </button>
    );
};

export default ThemeToggle;
