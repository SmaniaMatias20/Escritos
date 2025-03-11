import React from 'react';

function About() {
    return (
        <div className="w-full h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col px-6 py-12">

            {/* Contenedor principal */}
            <div className="w-full max-w-full mx-auto space-y-12">

                {/* Título */}
                <h1 className="text-4xl font-bold text-center mb-8">Sobre Mí</h1>

                {/* Contenido con imagen de perfil y descripción */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 w-full">
                    {/* Descripción */}
                    <div className="md:w-2/3 text-lg text-center md:text-left max-w-full mx-auto">
                        <p className="mb-4">
                            Soy un escritor que busca inspirar y conectar a través de las palabras. Mi trabajo abarca desde historias personales hasta narrativas más complejas.
                        </p>
                        <p className="mb-4">
                            Creo firmemente que la escritura tiene el poder de transformar ideas y emociones. Fuera de mis proyectos literarios, me encanta explorar el mundo, leer y disfrutar de la naturaleza.
                        </p>
                    </div>
                    {/* Imagen de perfil */}
                    <div className="flex justify-center md:w-1/3 mb-8 md:mb-0">
                        <img
                            src="https://via.placeholder.com/150" // Reemplaza con la URL de tu imagen de perfil
                            alt="Perfil"
                            className="w-36 h-36 rounded-full object-cover border-2 border-black dark:border-white shadow-xl"
                        />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default About;
