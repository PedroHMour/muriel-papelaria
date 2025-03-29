import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';  // Ícones
import { IoPersonCircle } from 'react-icons/io5';  // Ícone de Login
import styled from 'styled-components';
import logo from '../assets/logo.png';  // Caminho da logo

// Estilos para a Navbar
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  width: 120px;
  height: auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLinkItem = styled(Link)`
  color: #6b95a0;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #ec5288;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  padding: 5px 15px;
  flex: 1;
  max-width: 600px;
  margin-right: 20px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #f8f8f8;
  color: #6b95a0;

  &::placeholder {
    color: #ec5288;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  color: #ec5288;
  cursor: pointer;

  &:hover {
    color: #d64e77;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Logo */}
      <LogoContainer>
        <LogoImage src={logo} alt="Muriel Papelaria" />
      </LogoContainer>

      {/* Itens de Navegação */}
      <NavLinks>
        <NavLinkItem to="/">Início</NavLinkItem>
        <NavLinkItem to="/produtos">Produtos</NavLinkItem>
        <NavLinkItem to="/sacolas">Sacolas</NavLinkItem>
        <NavLinkItem to="/orcamento">Orçamento</NavLinkItem>
        <NavLinkItem to="/como-comprar">Como Comprar</NavLinkItem>
      </NavLinks>

      {/* Barra de Pesquisa (Maior, ocupando mais espaço) */}
      <SearchContainer>
        <SearchInput type="text" placeholder="O que você está buscando?" />
        <button style={{ background: 'transparent', border: 'none' }}>
          <FaSearch size={20} color="#ec5288" />
        </button>
      </SearchContainer>

      {/* Login e Carrinho */}
      <RightContainer>
        {/* Se não estiver logado, exibe o botão de login e redireciona para a página de login */}
        <Link to="/login">
          <IconButton>
            <IoPersonCircle size={30} />
            <span>Olá! Faça login</span>
          </IconButton>
        </Link>

        {/* Link para a página de Cadastro */}
        <Link to="/cadastro">
          <IconButton>
            <span>Cadastre-se</span>
          </IconButton>
        </Link>

        {/* Ícone do Carrinho */}
        <Link to="/cart">
          <IconButton>
            <FaShoppingCart size={30} />
            <span>0</span> {/* Aqui você pode adicionar o número de itens no carrinho */}
          </IconButton>
        </Link>
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
