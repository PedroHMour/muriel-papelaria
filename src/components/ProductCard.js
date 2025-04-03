import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const ProductCardContainer = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f8d9e1;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const AddToCartButton = styled.button`
  background-color: #ec5288;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #d64e77;
  }
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <ProductCardContainer>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
      <AddToCartButton onClick={handleAddToCart}>Adicionar ao Carrinho</AddToCartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
