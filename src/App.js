import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';  // Importando o Footer
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Cadastro from './pages/Cadastro';  // Importando a página de Cadastro
import Login from './pages/login'
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cadastro" element={<Cadastro />} />  {/* Adicionando a Rota de Cadastro */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />  {/* Exibindo o Footer */}
    </Router>
  );
}

export default App;
