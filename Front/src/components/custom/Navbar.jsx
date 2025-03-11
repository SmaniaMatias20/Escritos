import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkContext } from './DarkContext';  // Contexto para el modo oscuro
import ThemeToggle from './ThemeToggle'; // Botón de alternancia de tema

function Navbar() {
    // Estado para controlar la visibilidad del menú en dispositivos móviles
    const [isOpen, setIsOpen] = useState(false);

    // Obtener el estado de 'isDarkMode' y la función 'toggleDarkMode' desde el contexto
    const { isDarkMode, toggleDarkMode } = useContext(DarkContext);

    // Función para alternar la visibilidad del menú hamburguesa
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white dark:bg-[#1f0148] text-black dark:text-white shadow-md py-3 relative">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center z-10">
                {/* Logo o Título */}
                <div className="text-xl font-semibold">Mi Portfolio</div>

                {/* Menú de navegación */}
                <div className={`flex items-center space-x-4 ${isOpen ? 'flex-col space-y-4 absolute top-full left-0 w-full bg-white dark:bg-[#1f0148] shadow-md z-20' : 'hidden'} md:flex md:space-x-4 md:flex-row transition-all duration-300 ease-in-out`}>
                    <Link to="/" className="hover:text-gray-500">Inicio</Link>
                    <Link to="/writings" className="hover:text-gray-500">Escritos</Link>
                    <Link to="/about" className="hover:text-gray-500">Sobre Mi</Link>
                    <Link to="/contact" className="hover:text-gray-500">Contacto</Link>

                    {/* Botón de cambio de tema */}
                    <ThemeToggle onClick={toggleDarkMode} isDarkMode={isDarkMode} />
                </div>

                {/* Botón hamburguesa (visible solo en pantallas pequeñas) */}
                <button onClick={toggleMenu} className="md:hidden text-gray-600 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
