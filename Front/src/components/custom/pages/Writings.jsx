import React from 'react';
import Writing from '../Writing';  // Import the Writing component

// Writings component: displays a list of all writings
function Writings() {
    // Example data for the writings (you could fetch this data from a database or an API)
    const writingsData = [
        {
            title: "La Magia de Escribir",
            description: "Un ensayo sobre cómo la escritura puede transformar vidas.",
            date: "2025-03-10",
        },
        {
            title: "Historias del Viento",
            description: "Un cuento corto que explora los misterios de un pueblo en las montañas.",
            date: "2025-02-25",
        },
        {
            title: "Reflexiones Diarias",
            description: "Una serie de reflexiones personales y pensamientos sobre la vida y la creatividad.",
            date: "2025-01-18",
        },
    ];


    return (
        <div className="w-full h-screen bg-white dark:bg-[#1f0148] text-gray-800 dark:text-white flex flex-col px-6">
            <div className="flex flex-col gap-8 w-full p-8">
                <h1 className="text-4xl font-semibold text-center">Escritos</h1>
                <div className=''>
                    {/* Map over the writingsData and display each writing using the Writing component */}
                    {writingsData.map((writing, index) => (
                        <Writing
                            key={index}
                            title={writing.title}
                            description={writing.description}
                            date={writing.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Writings;
