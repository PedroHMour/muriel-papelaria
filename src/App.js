import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Substituímos 'Switch' por 'Routes'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Routes>  {/* Usando 'Routes' no lugar de 'Switch' */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
