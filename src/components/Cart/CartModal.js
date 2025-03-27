import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartModal.css'; // Certifique-se de que a importação do CSS está correta

const CartModal = ({ closeModal }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-modal-overlay" onClick={closeModal}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Seu Carrinho</h3>
        {cartItemCount === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>R${item.price} x {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            ))}
          </div>
        )}
        <div className="cart-summary">
          <p>Total: R${cartTotal.toFixed(2)}</p>
          <button className="checkout">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
