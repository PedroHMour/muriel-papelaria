import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const LoginContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #ec5288;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ec5288;
  font-size: 16px;
  background-color: #f8d9e1;
  color: #6b95a0;

  &::placeholder {
    color: #ec5288;
  }

  &:focus {
    outline: none;
    border-color: #d64e77;
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: #6b95a0;
  margin-bottom: 5px;
  display: block;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 30px;
  color: #6b95a0;
  font-size: 14px;
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    lembrar: false,
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica de validação simples (verifica se os campos não estão vazios)
    if (!formData.email || !formData.senha) {
      setErrorMessage('Preencha todos os campos');
      return;
    }

    // Chama a API para login
    const data = {
      email: formData.email,
      senha: formData.senha,
    };

    try {
      const response = await fetch('http://localhost:5181/api/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        // Redireciona o usuário para a página principal ou outra página após login
        navigate('/');
      } else {
        setErrorMessage(result.error || 'Erro ao fazer login');
      }
    } catch (error) {
      setErrorMessage('Erro ao tentar fazer login');
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <LoginContainer>
      <FormTitle>Login</FormTitle>
      {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu e-mail"
        />

        <Label htmlFor="senha">Senha</Label>
        <Input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Digite sua senha"
        />

        <CheckboxContainer>
          <input
            type="checkbox"
            id="lembrar"
            name="lembrar"
            checked={formData.lembrar}
            onChange={handleChange}
          />
          <label htmlFor="lembrar" style={{ marginLeft: '8px' }}>Lembrar-me</label>
        </CheckboxContainer>

        <Button type="submit">Entrar</Button>
      </form>

      <FooterText>
        Não tem uma conta? <Link to="/cadastro">Crie uma conta</Link>
      </FooterText>
      <FooterText>
        <Link to="/recuperar-senha">Esqueceu sua senha?</Link>
      </FooterText>
    </LoginContainer>
  );
};

export default Login;
