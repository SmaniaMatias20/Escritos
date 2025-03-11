import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1f0148] text-black dark:text-white flex flex-col justify-center items-center text-center px-6 py-12">
      <h1 className="text-5xl font-extrabold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
        Bienvenido a mi Portfolio
      </h1>
      <p className="text-lg sm:text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
        Explora escritos y más en un entorno visualmente agradable. ¡Disfruta tu visita!
      </p>
      <div className="flex justify-center space-x-4">
        <button className="px-6 py-3 bg-black dark:bg-white dark:text-black text-white rounded-full text-lg font-semibold transition duration-200 transform hover:scale-105">
          Explorar Escritos
        </button>
        <button className="px-6 py-3 border-2 border-black dark:border-white dark:text-white text-black  rounded-full text-lg font-semibold transition duration-200 transform hover:scale-105">
          Sobre Mi
        </button>
      </div>
    </div>
  );
};

export default Home;
