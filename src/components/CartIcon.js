import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  color: #ec5288;
  font-size: 18px;
`;

const CartIcon = ({ itemCount }) => {
  return (
    <CartIconContainer>
      <FaShoppingCart size={24} />
      {itemCount > 0 && <span>{itemCount}</span>}
    </CartIconContainer>
  );
};

export default CartIcon;
