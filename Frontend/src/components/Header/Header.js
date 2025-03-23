import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext'; // Importando o contexto do carrinho
import './Header.css';
import CartModal from '../Cart/CartModal'; // Importando o modal do carrinho

const Header = () => {
  const { cart } = useContext(CartContext); // Pegando o estado do carrinho
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle para abrir/fechar o modal

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0); // Conta o total de itens no carrinho

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="/assets/logo.png" alt="Logo" />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="O que você está buscando?" />
      </div>
      <div className="navbar-links">
        <a href="/">Início</a>
        <a href="/produtos">Produtos</a>
        <a href="/contato">Contato</a>
        <div className="navbar-cart" onClick={toggleModal}>
         <i className="fa fa-shopping-cart"></i>
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>} {/* Exibindo número de itens no carrinho */}
        </div>
      </div>  

      {isModalOpen && <CartModal closeModal={toggleModal} />}
    </header>
  );
};

export default Header;
