import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext'; // Importando o contexto do carrinho
import Navbar from '../Navbar/Navbar';
import CartModal from '../Cart/CartModal'; // Importando o modal do carrinho
import './Header.css';
const Header = () => {
  const { cart } = useContext(CartContext); // Pegando o estado do carrinho
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle para abrir/fechar o modal

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0); // Conta o total de itens no carrinho

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      {/* Navbar */}
      <Navbar cartItemCount={cartItemCount} toggleModal={toggleModal} />
    
      {isModalOpen && <CartModal closeModal={toggleModal} />}
    </header>
  );
};

export default Header;
