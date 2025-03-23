import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Importa o contexto
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, removeOneFromCart, clearCart } = useContext(CartContext); // Pegamos a função removeOneFromCart também

  return (
    <div className="cart-container">
      <h2 className="cart-title">Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Seu carrinho está vazio.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">{item.price}</p>
                <p className="cart-item-quantity">Quantidade: {item.quantity}</p> {/* Exibindo a quantidade */}
              </div>
              <button onClick={() => removeOneFromCart(item.id)}>Remover 1</button> {/* Remover 1 unidade */}
              <button onClick={() => removeFromCart(item.id)}>Remover do Carrinho</button> {/* Remover completamente */}
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-actions">
          <button className="clear-cart" onClick={clearCart}>Limpar Carrinho</button>
          <button className="checkout">Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
