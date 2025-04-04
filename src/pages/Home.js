import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'; // Certifique-se de que o Button.js está no caminho correto
import bag from '../assets/bag1.jpg';
import sacola from '../assets/bag2.jpg';
import promo1 from '../assets/promo1.jpg';  // Novo banner
import promo2 from '../assets/promo2.jpg';  // Novo banner

const HomeContainer = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const HeroSection = styled.div`
  position: relative;
  text-align: center;
  padding: 50px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  font-size: 20px;
  color: #ec5288;
  margin-bottom: 10px;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #6b95a0;
  margin-bottom: 20px;
`;

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;  // Definindo altura para as imagens
  overflow: hidden;
`;

const Banner = styled.div`
  display: flex;
  transition: transform 4s ease-in-out;  // Transição suave entre as imagens
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.left ? 'left: 10px;' : 'right: 10px;'}
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const PromoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const PromoCard = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 30%;
  border-radius: 8px;
  box-shadow: none;
  text-align: center;
  transition: transform 0.3s;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05); /* Aumenta o tamanho do card ao passar o mouse */
  }
`;

const PromoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductCardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); /* Aumenta o tamanho do card ao passar o mouse */
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductContent = styled.div`
  padding: 15px;
`;

const ProductTitle = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #777;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #e91e63;
`;

const BuyButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  
  // Estado para o banner atual
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [promo1, promo2, bag, sacola];  // Adicione quantos banners quiser

  // Função que altera o banner a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prevBanner => (prevBanner + 3) % banners.length);
    }, 2000);
    
    return () => clearInterval(interval);  // Limpeza do intervalo ao desmontar o componente
  }, []);

  const handleCardClick = () => {
    navigate('/sacolas');
  };

  const goToNextBanner = () => {
    setCurrentBanner((currentBanner + 1) % banners.length);
  };

  const goToPreviousBanner = () => {
    setCurrentBanner((currentBanner - 1 + banners.length) % banners.length);
  };

  return (
    <HomeContainer>
      {/* Hero Section com carrossel */}
      <HeroSection>
        <HeroTitle>É Sua primeira compra ?</HeroTitle>
        <HeroSubtitle>Produtos personalizados para você!</HeroSubtitle>
        <BannerWrapper>
          <Banner style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
            {banners.map((banner, index) => (
              <BannerImage key={index} src={banner} alt={`Banner ${index}`} />
            ))}
          </Banner>
          <ArrowButton left onClick={goToPreviousBanner}>‹</ArrowButton>
          <ArrowButton onClick={goToNextBanner}>›</ArrowButton>
        </BannerWrapper>
      </HeroSection>  

      {/* Seção de Produtos em Destaque */}
      <h2>Produtos em Destaque</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
        <ProductCardContainer>
          <ProductImage src='/path/to/product-image.jpg' alt="Produto 1" />
          <ProductContent>
            <ProductTitle>Caderno Personalizado</ProductTitle>
            <ProductDescription>Descrição do produto</ProductDescription>
            <ProductPrice>R$ 69,00</ProductPrice>
            <BuyButton onClick={() => alert('Adicionado ao carrinho')}>Adicionar ao Carrinho</BuyButton>
          </ProductContent>
        </ProductCardContainer>

        <ProductCardContainer>
          <ProductImage src='/path/to/product-image.jpg' alt="Produto 2" />
          <ProductContent>
            <ProductTitle>Caneta Esferográfica</ProductTitle>
            <ProductDescription>Descrição do produto</ProductDescription>
            <ProductPrice>R$ 2,50</ProductPrice>
            <BuyButton onClick={() => alert('Adicionado ao carrinho')}>Adicionar ao Carrinho</BuyButton>
          </ProductContent>
        </ProductCardContainer>

        <ProductCardContainer>
          <ProductImage src='/path/to/product-image.jpg' alt="Produto 3" />
          <ProductContent>
            <ProductTitle>Agenda de Planejamento</ProductTitle>
            <ProductDescription>Descrição do produto</ProductDescription>
            <ProductPrice>R$ 45,00</ProductPrice>
            <BuyButton onClick={() => alert('Adicionado ao carrinho')}>Adicionar ao Carrinho</BuyButton>
          </ProductContent>
        </ProductCardContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
