import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const Checkout = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CheckoutContainer>
      <h2>Finalizar Compra</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio. Adicione produtos para continuar.</p>
      ) : (
        <div>
          <div>
            <h3>Itens no Carrinho</h3>
            {cartItems.map((item) => (
              <div key={item.id}>
                <span>{item.name}</span>
                <span>R$ {item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            ))}
          </div>
          <h3>Total: R$ {calculateTotal()}</h3>
          <button>Confirmar Compra</button>
        </div>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
