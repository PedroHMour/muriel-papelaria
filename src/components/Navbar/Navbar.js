import React from 'react';
import '../Navbar/Navbar.css';

const Navbar = ({ cartItemCount, toggleModal }) => {
    return (
        <div className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <img src="/assets/logo.png" alt="Logo" />
            </div>

            {/* Barra de pesquisa */}
            <div className="navbar-search">
                <input type="text" placeholder="O que você está buscando" />
            </div>

            {/* Links de navegação */}
            <div className="navbar-links">
                <a href="/">Início</a>
                <a href="kitsdigitais">kits Digitais</a>
                <a href="caixinhas">Caixinhas</a>
                <a href="topodebolo">Topo Bolo</a>
                <a href="decoracao">Decoração</a>
                <a href="Kit Festas">Kit Festas</a>
                <a href="personalizados">Personalizados</a>
            </div>

            {/* Ícones de navegação */}
            <div className="navbar-icons">
                <div className="navbar-icon">
                    <i className="fi fi-rr-user"></i>
                    <div className="tooltip">Minha conta</div>
                </div>
                <div className="navbar-icon">
                    <i className="fi fi-ss-heart"></i>
                    <div className="tooltip">Meus desejos</div>
                </div>
                <div className="navbar-cart" onClick={toggleModal}>
                    <i className="fa fa-shopping-cart"></i>
                    {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                    <div className="tooltip">Carrinho</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;