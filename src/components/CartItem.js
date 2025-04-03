import React from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  max-width: 100%;
`;

const ItemName = styled.span`
  font-size: 16px;
  color: #333;
  margin-right: 8px;
`;

const ItemPrice = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  background-color: #ec5288;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #d64e77;
  }
`;

const CartItem = ({ item, removeFromCart }) => {
  return (
    <CartItemContainer>
      <div>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
      </div>
      <RemoveButton onClick={() => removeFromCart(item.id)}>
        <FaTrashAlt /> Remover
      </RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
