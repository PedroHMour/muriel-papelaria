import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Importa o context
import './ProductCard.css';


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);


  const handleAddToCart = () => {
    addToCart(product); // Adiciona o produto ao carrinho
  };

  
  return (
    <div className="product-card">
      <img className="product-card-image" src={product.image} alt={product.name} />
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-price" >{product.price}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;
