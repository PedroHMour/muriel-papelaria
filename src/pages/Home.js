import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const HomeContainer = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #f8d9e1;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  color: #ec5288;
  margin-bottom: 10px;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #6b95a0;
  margin-bottom: 20px;
`;

const PromoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
`;

const PromoCard = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 48%;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PromoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Home = () => {
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>Bem-vindo à Muriel Papelaria</HeroTitle>
        <HeroSubtitle>Produtos personalizados para você!</HeroSubtitle>
        <Button onClick={() => alert('Clique aqui para ver mais!')}>Ver mais</Button>
      </HeroSection>

      {/* Promo Section */}
      <PromoContainer>
        <PromoCard>
          <PromoImage src='./assets/bag1.png' alt="Promoção sacolas" />
          <h3>SACOLAS PERSONALIZADAS</h3>
          <Button onClick={() => alert('Clique aqui para personalizar!')}>Clique aqui</Button>
        </PromoCard>
        <PromoCard>
          <PromoImage src="../assets/bag2.png" alt="Escolha o tamanho ideal" />
          <h3>ESCOLHA O TAMANHO IDEAL</h3>
          <Button onClick={() => alert('Clique aqui para escolher o tamanho!')}>Clique aqui</Button>
        </PromoCard>
      </PromoContainer>

      {/* Seção de Produtos em Destaque */}
      <h2>Produtos em Destaque</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
        <ProductCard
          product={{ id: 1, name: 'Caderno Personalizado', price: 69.00, imageUrl: '/path/to/product-image.jpg' }}
          onAddToCart={() => alert('Adicionado ao carrinho')}
        />
        <ProductCard
          product={{ id: 2, name: 'Caneta Esferográfica', price: 2.50, imageUrl: '/path/to/product-image.jpg' }}
          onAddToCart={() => alert('Adicionado ao carrinho')}
        />
        <ProductCard
          product={{ id: 3, name: 'Agenda de Planejamento', price: 45.00, imageUrl: '/path/to/product-image.jpg' }}
          onAddToCart={() => alert('Adicionado ao carrinho')}
        />
      </div>
    </HomeContainer>
  );
};

export default Home;
