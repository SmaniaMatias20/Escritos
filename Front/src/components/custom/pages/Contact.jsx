import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaBook } from 'react-icons/fa'; // Importar los iconos que necesitas

const Contact = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col justify-center text-center px-8 py-16">

            <div className="flex flex-col md:flex-row justify-between gap-16 border rounded-lg p-4 h-screen">

                {/* Información de contacto */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-semibold text-center text-gray-900 dark:text-white">Contáctame</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">Si tienes alguna pregunta o te gustaría saber más sobre mis escritos, no dudes en contactarme.</p>

                    {/* Correo Electrónico */}
                    <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                        <FaEnvelope className="h-5 w-5" />
                        <p className="text-lg">miemail@dominio.com</p>
                    </div>

                    {/* Teléfono */}
                    <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                        <FaPhoneAlt className="h-5 w-5" />
                        <p className="text-lg">+123 456 789</p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="h-7 w-7 text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="h-7 w-7 text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors" />
                        </a>
                        <a href="https://www.wattpad.com" target="_blank" rel="noopener noreferrer">
                            <FaBook className="h-7 w-7 text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors" />
                        </a>
                        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="h-7 w-7 text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Formulario de Contacto */}
                <div className="w-full md:w-1/2">
                    <form className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6 h-full">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Formulario de Contacto</h2>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Nombre</label>
                            <input
                                id="name"
                                type="text"
                                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-transparent focus:ring-2 focus:ring-gray-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Correo Electrónico</label>
                            <input
                                id="email"
                                type="email"
                                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-transparent focus:ring-2 focus:ring-gray-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Mensaje</label>
                            <textarea
                                id="message"
                                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-transparent focus:ring-2 focus:ring-gray-500 focus:outline-none"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gray-700 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors duration-300"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>


            </div>

        </div>
    );
};

export default Contact;
