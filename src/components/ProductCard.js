import React from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f8d9e1;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <button onClick={onAddToCart}>Adicionar ao Carrinho</button>
    </ProductCardContainer>
  );
};

export default ProductCard;
