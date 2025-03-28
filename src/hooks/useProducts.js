import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = getProducts();
    setProducts(productsData);
  }, []);

  return products;
};

export default useProducts;
