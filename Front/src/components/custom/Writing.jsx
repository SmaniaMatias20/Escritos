import React from 'react';
import { Award } from 'lucide-react'; // Importar el icono de medalla

// Writing component: displays a single writing piece with clickable functionality and includes the Wattpad ranking
function Writing({ title, description, date, url, ranking }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="mx-auto p-6 m-4 rounded-xl shadow-2xl bg-white dark:bg-[#1f0148] text-gray-800 dark:text-white transform transition duration-300 ease-in-out hover:scale-105 relative space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">Publicado en: {date}</p>

                {/* Ranking and Icon - Positioned at the bottom right */}
                {ranking && (
                    <div className="absolute bottom-2 right-2 flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                        <Award size={14} /> {/* Medalla icono */}
                        <p>Ranking en Wattpad: {ranking}</p>
                    </div>
                )}
            </div>
        </a>
    );
}

export default Writing; 