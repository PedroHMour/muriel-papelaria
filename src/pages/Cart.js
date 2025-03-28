import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <span>{item.name}</span>
              <span>R$ {item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          ))}
          <h3>Total: R$ {calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
