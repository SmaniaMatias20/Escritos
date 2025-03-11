import React from 'react';
import Perfil from '../../../assets/img/perfil.webp';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../../ui/carousel'; // Importamos los componentes del carrusel
import portada1 from '../../../assets/img/portada1.jpg';
import portada2 from '../../../assets/img/portada2.jpg';
import portada3 from '../../../assets/img/portada3.jpg';
import portada4 from '../../../assets/img/portada4.jpg';
import portada5 from '../../../assets/img/portada5.jpg';



const libros = [
    {
        titulo: 'Suspiros Robados',
        autor: 'Autor del libro',
        descripcion: 'Descripcion del libro',
        img: portada1,
    },
    {
        titulo: 'Antes de Diciembre',
        autor: 'Autor del libro',
        descripcion: 'Descripcion del libro',
        img: portada2,
    },
    {
        titulo: 'Sueños Enterrados',
        autor: 'Autor del libro',
        descripcion: 'Descripcion del libro',
        img: portada3,
    },
    {
        titulo: 'Tres Meses',
        autor: 'Autor del libro',
        descripcion: 'Descripcion del libro',
        img: portada4,
    },
    {
        titulo: 'Si Me Dices que No',
        autor: 'Autor del libro',
        descripcion: 'Descripcion del libro',
        img: portada5,
    },
];

function About() {
    return (
        <div className="w-full h-full bg-white dark:bg-[#1f0148] text-gray-800 dark:text-white flex flex-col px-6 py-12">

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
                            src={Perfil}
                            alt="Perfil"
                            className="w-72 h-72 rounded-full object-cover shadow-2xl"
                        />
                    </div>
                </div>

                {/* Sección de carrusel de libros favoritos */}
                <div className="w-full text-center mt-6 p-8">
                    <h2 className="text-3xl font-semibold mb-6">Mis Libros Favoritos</h2>
                    <Carousel className="w-full">
                        {/* CarouselContent envuelve todos los CarouselItems */}
                        <CarouselContent className="p-8">
                            {libros.map((libro, index) => (
                                <CarouselItem key={index} className="flex justify-center items-center sm:basis-1/3 transition-transform transform sm:hover:scale-105">
                                    <div className="flex flex-col w-72 h-96 justify-center items-center bg-gray-300 dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
                                        <img
                                            src={libro.img}
                                            alt={libro.titulo}
                                            className="w-full h-full  rounded-lg"
                                        />
                                    </div>


                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Los botones para navegar entre los items */}
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default About;
