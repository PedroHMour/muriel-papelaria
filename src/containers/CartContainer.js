import React, { useState } from 'react';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../components/Button';

const CartNotificationModal = styled.div`
  display: ${props => (props.showModal ? 'block' : 'none')};
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  color: #ec5288;
  font-size: 18px;
`;

const CartIcon = ({ itemCount }) => (
  <CartIconContainer>
    <FaShoppingCart size={24} />
    {itemCount > 0 && <span>{itemCount}</span>}
  </CartIconContainer>
);

const CartContainer = () => {
  const { cartItems } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);  // Fecha o modal após 3 segundos
  };

  return (
    <div>
      <CartNotificationModal showModal={showModal}>
        <p>Produto adicionado ao carrinho!</p>
      </CartNotificationModal>

      <Button onClick={handleAddToCart}>Adicionar ao Carrinho</Button>
      <CartIcon itemCount={cartItems.length} />
    </div>
  );
};

export default CartContainer;
