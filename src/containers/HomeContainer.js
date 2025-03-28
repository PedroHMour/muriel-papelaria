import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const HomeContainer = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const productsData = getProducts();
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
