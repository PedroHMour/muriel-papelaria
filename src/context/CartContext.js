import React, { createContext, useState } from 'react';

// Criação do contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Função para adicionar ao carrinho
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Função para remover um item completamente do carrinho
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId)); // Compara o id
  };

  // Função para remover uma quantidade específica do produto do carrinho
  const removeOneFromCart = (productId) => {
    setCart(prevCart => {
      const productToRemove = prevCart.find(item => item.id === productId);
      if (productToRemove.quantity > 1) {
        // Se a quantidade for maior que 1, decrementa a quantidade
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Caso contrário, remove o produto completamente
        return prevCart.filter(item => item.id !== productId);
      }
    });
  };

  // Função para limpar o carrinho
  const clearCart = () => {
    setCart([]); // Limpa todos os itens do carrinho
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeOneFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
