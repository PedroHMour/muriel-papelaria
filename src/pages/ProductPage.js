import React from 'react';

const ProductPage = ({ match }) => {
  const productId = match.params.id;
  // Aqui você pode pegar as informações do produto de uma API ou banco de dados
  const product = {
    id: productId,
    name: 'Caderno de Memórias',
    price: 'R$50,00',
    description: 'Um lindo caderno para registrar suas memórias.',
    image: '/images/caderno.jpg',
  };

  return (
    <div className="product-page">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductPage;
