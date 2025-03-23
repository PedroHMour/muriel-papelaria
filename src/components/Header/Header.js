import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.svg" alt="Logo Criativa Apetiva" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/cart">Carrinho</Link></li>
          <li><Link to="/products">Produtos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
