import React from 'react';
import Writing from '../Writing';  // Import the Writing component

// Writings component: displays a list of all writings
function Writings() {
    // Example data for the writings (you could fetch this data from a database or an API)
    const writingsData = [
        {
            title: "Tal vez no sean cuentos",
            description: "Agregar descripcion del escrito.",
            date: "2025-03-10",
            url: "https://www.wattpad.com/1415546112-tal-vez-no-sean-cuentos-sola",
            ranking: 292
        },
        {
            title: "El regreso de Emily",
            description: "Agregar descripcion del escrito.",
            date: "2025-02-25",
            url: "https://www.wattpad.com/1449212121-el-regreso-de-emily-demonio",
            ranking: 493
        },
        {
            title: "Escrito numero 3",
            description: "Agregar descripcion del escrito numero 3.",
            date: "2025-01-18",
            url: "https://www.wattpad.com/1415546112-tal-vez-no-sean-cuentos-sola",
            ranking: 999
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
                            url={writing.url}
                            ranking={writing.ranking}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Writings;
