import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto de DarkMode
export const DarkContext = createContext();

export const DarkProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Verificamos el valor guardado en localStorage al cargar la aplicación
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');  // Aplica la clase 'dark' al <html>
        }
    }, []);

    // Función para alternar entre el modo oscuro y claro
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add('dark');  // Aplica la clase 'dark'
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');  // Elimina la clase 'dark'
                localStorage.setItem('theme', 'light');
            }
            return newMode;
        });
    };

    return (
        <DarkContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}  {/* Proporciona el contexto a toda la aplicación */}
        </DarkContext.Provider>
    );
};
