import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import Button from '../components/Button'; // Supondo que você já tenha esse componente para botões
import { useNavigate } from 'react-router-dom';

const CartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const CartHeader = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const CartItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const ItemName = styled.span`
  font-size: 16px;
  color: #333;
`;

const ItemPrice = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  background-color: #ec5288;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #d64e77;
  }
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const PaymentSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PaymentMethodButton = styled(Button)`
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

const ShippingInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 10px;
  font-size: 16px;
`;

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [shippingZip, setShippingZip] = useState('');
  const [shippingCost, setShippingCost] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0) + shippingCost;
  };

  const handleShippingChange = async (e) => {
    setShippingZip(e.target.value);
    // Simulação de cálculo de frete (aqui você pode integrar a API de frete, como a dos Correios)
    if (e.target.value.length === 5) {
      setShippingCost(20); // Exemplo de custo fixo, você deve usar a API real
    } else {
      setShippingCost(0);
    }
  };

  const handlePayment = () => {
    // Aqui, você poderia integrar a API de pagamento de sua escolha (PayPal, Stripe, etc.)
    alert(`Pagamento processado com método: ${paymentMethod}`);
    navigate('/success'); // Redirecionar para uma página de sucesso após o pagamento
  };

  return (
    <CartContainer>
      <CartHeader>Carrinho de Compras</CartHeader>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio. Adicione produtos para continuar.</p>
      ) : (
        <div>
          <CartItemList>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <div>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                </div>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  <FaTrashAlt /> Remover
                </RemoveButton>
              </CartItem>
            ))}
          </CartItemList>

          <TotalSection>
            <span>Total:</span>
            <span>R$ {calculateTotal().toFixed(2)}</span>
          </TotalSection>

          {/* Seção de Cálculo de Frete */}
          <div>
            <label>Cálculo de Frete</label>
            <ShippingInput
              type="text"
              placeholder="Digite seu CEP"
              value={shippingZip}
              onChange={handleShippingChange}
            />
            {shippingZip && shippingCost > 0 && <p>Frete estimado: R$ {shippingCost}</p>}
          </div>

          {/* Seção de Métodos de Pagamento */}
          <PaymentSection>
            <h3>Escolha o Método de Pagamento</h3>
            <PaymentMethodButton onClick={() => setPaymentMethod('PayPal')}>Pagar com PayPal</PaymentMethodButton>
            <PaymentMethodButton onClick={() => setPaymentMethod('Stripe')}>Pagar com Cartão de Crédito</PaymentMethodButton>

            {paymentMethod && (
              <div>
                <p>Método escolhido: {paymentMethod}</p>
                <Button onClick={handlePayment}>Finalizar Compra</Button>
              </div>
            )}
          </PaymentSection>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
