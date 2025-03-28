import React from 'react';
import ReactDOM from 'react-dom/client'; // Mudança no React 18, agora usa createRoot
import App from './App';
import './styles/global.css';  // Certifique-se de que o caminho está correto
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
