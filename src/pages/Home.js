import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import './Home.css'

const Home = () => {
  const products = [
    { id: 1, name: 'Caderno de Memórias', price: 'R$50,00', image: '/assets/product-01.jpg' },
    { id: 2, name: 'Caderno de Memórias', price: 'R$50,00', image: '/assets/product-01.jpg' },
    { id: 3, name: 'Caderno de Memórias', price: 'R$50,00', image: '/assets/product-01.jpg' },
    { id: 4, name: 'Caderno de Memórias', price: 'R$50,00', image: '/assets/product-01.jpg' },
    { id: 5, name: 'Caderno de Memórias', price: 'R$50,00', image: '/assets/product-01.jpg' },
    { id: 6, name: 'Caderno de Memórias', price: 'R$50,00', image: '/assets/product-01.jpg' },




  ];

  return (
    <div className="home-container">
      <h2 className="home-title">Bem-vindo à Muriel Papelaria Criativa</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
