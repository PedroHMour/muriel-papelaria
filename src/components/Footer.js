import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #ec5288;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 10px;
`;

const FooterTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
`;

const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin: 5px 0;
  font-size: 16px;

  &:hover {
    color: #f8d9e1;
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  margin-top: 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 24px;
  margin-top: 20px;
`;

const PaymentMethods = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
`;

const PaymentIcon = styled.img`
  width: 50px;
  height: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Menu de Navegação */}
      <FooterSection>
        <FooterTitle>MENU</FooterTitle>
        <FooterLink href="#">Início</FooterLink>
        <FooterLink href="#">Produtos</FooterLink>
        <FooterLink href="#">Sacolas</FooterLink>
        <FooterLink href="#">Orçamento</FooterLink>
        <FooterLink href="#">Como Comprar</FooterLink>
      </FooterSection>

      {/* Informações de Contato */}
      <FooterSection>
        <FooterTitle>ENTRE EM CONTATO</FooterTitle>
        <ContactInfo>
          <p>1232143243242</p>
          <p> somente WhatsApp</p>
          <p>murielpapelaria@gmail.com</p>
          <p>Manaus, AM</p>
        </ContactInfo>
        {/* Ícones Sociais */}
        <SocialIcons>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </SocialIcons>
      </FooterSection>

      {/* Meios de Pagamento */}
      <FooterSection>
        <FooterTitle>Meios de Pagamento</FooterTitle>
        <PaymentMethods>
          <PaymentIcon src="/assets/images/visa.png" alt="Visa" />
          <PaymentIcon src="/assets/images/mastercard.png" alt="MasterCard" />
          <PaymentIcon src="/assets/images/amex.png" alt="Amex" />
          <PaymentIcon src="/assets/images/diners.png" alt="Diners" />
          <PaymentIcon src="/assets/images/boleto.png" alt="Boleto" />
          <PaymentIcon src="/assets/images/pix.png" alt="PIX" />
        </PaymentMethods>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
