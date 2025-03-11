import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { DarkProvider } from './components/custom/DarkContext'; // Asegúrate de importar DarkProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkProvider>  {/* Envolvemos la aplicación con DarkProvider */}
      <App />
    </DarkProvider>
  </StrictMode>,
);
