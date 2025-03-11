import React from 'react';
import Perfil from '../../../assets/img/perfil.webp'

function About() {
    return (
        <div className="w-full h-screen bg-white dark:bg-[#1f0148] text-gray-800 dark:text-white flex flex-col px-6 py-12">

            {/* Contenedor principal */}
            <div className="w-full max-w-full mx-auto space-y-12">

                {/* Título */}
                <h1 className="text-4xl font-bold text-center mb-8">Sobre Mí</h1>

                {/* Contenido con imagen de perfil y descripción */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 w-full">
                    {/* Descripción */}
                    <div className="md:w-2/3 text-lg text-center md:text-left max-w-full mx-auto">
                        <p className="mb-2">
                            Soy un escritor que busca inspirar y conectar a través de las palabras. Mi trabajo abarca desde historias personales hasta narrativas más complejas.
                        </p>
                        <p className="mb-2">
                            Creo firmemente que la escritura tiene el poder de transformar ideas y emociones. Fuera de mis proyectos literarios, me encanta explorar el mundo, leer y disfrutar de la naturaleza.
                        </p>
                        <p className="mb-2">
                            Mi objetivo como escritor es hacer que mis lectores vean el mundo desde una nueva perspectiva, fomentando la reflexión y la empatía. Disfruto contar historias que tocan temas profundos como la identidad, el amor y la superación.
                        </p>
                    </div>
                    {/* Imagen de perfil */}
                    <div className="flex justify-center md:w-1/3 mb-8 md:mb-0">
                        <img
                            src={Perfil} // Reemplaza con la URL de tu imagen de perfil
                            alt="Perfil"
                            className="w-72 h-72 rounded-full object-cover shadow-2xl"
                        />
                    </div>
                </div>

                {/* Sección de logros y proyectos destacados */}
                <div className="w-full text-center">
                    <h2 className="text-3xl font-semibold mb-6">Proyectos y Logros</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-3">Proyecto 1: [Título]</h3>
                            <p className="text-base">
                                Este es un proyecto literario en el que estoy trabajando actualmente, explorando temas de [tema relevante].
                            </p>
                        </div>
                        <div className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-3">Logro 1: [Título]</h3>
                            <p className="text-base">
                                En este logro, publiqué un libro que ha sido reconocido por [algún reconocimiento o detalle relevante].
                            </p>
                        </div>
                        <div className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-3">Proyecto 2: [Título]</h3>
                            <p className="text-base">
                                A través de este proyecto, he podido conectar con [algún grupo o comunidad], llevando mis escritos a nuevas audiencias.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sección de pasatiempos */}
                <div className="w-full mt-12">
                    <h2 className="text-3xl text-center font-semibold mb-6">Pasatiempos e Intereses</h2>
                    <p className="text-lg">
                        Cuando no estoy escribiendo, me gusta disfrutar de actividades como la lectura, el senderismo y el cine. Soy un apasionado de [algún tema, hobby o actividad], y siempre estoy buscando nuevas formas de enriquecer mi vida y mi creatividad.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default About;
