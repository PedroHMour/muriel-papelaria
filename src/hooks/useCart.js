import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useCart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return { cartItems, addToCart, removeFromCart };
};

export default useCart;
