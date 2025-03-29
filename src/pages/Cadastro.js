import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button'; // Certifique-se de usar o seu botão estilizado

const CadastroContainer = styled.div`
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

const CaptchaContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 30px;
  color: #6b95a0;
  font-size: 14px;
`;

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se as senhas coincidem
    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    const data = {
      nome: formData.nome,
      email: formData.email,
      senha: formData.senha,
      telefone: formData.telefone,
    };

    try {
      // Envia os dados para a API de cadastro
      const response = await fetch('http://localhost:5000/api/account/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Exibe a mensagem de sucesso
        // Você pode redirecionar para a página de login ou outra página após o cadastro
      } else {
        alert(result.error || 'Erro ao registrar usuário.');
      }
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error);
      alert('Erro ao fazer cadastro.');
    }
  };

  return (
    <CadastroContainer>
      <FormTitle>Crie sua conta</FormTitle>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="nome">Nome completo</Label>
        <Input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Ex.: Maria Perez"
        />
        
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ex.: seuemail@email.com"
        />

        <Label htmlFor="telefone">Telefone (opcional)</Label>
        <Input
          type="text"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Ex.: 119192030"
        />

        <Label htmlFor="senha">Senha</Label>
        <Input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Ex.: suaSenha123"
        />

        <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
        <Input
          type="password"
          id="confirmarSenha"
          name="confirmarSenha"
          value={formData.confirmarSenha}
          onChange={handleChange}
          placeholder="Ex.: suaSenha123"
        />

        <CaptchaContainer>
          {/* Aqui você pode adicionar o reCAPTCHA ou outra integração */}
          <input type="checkbox" required /> Não sou um robô
        </CaptchaContainer>

        <Button type="submit">Criar uma conta</Button>
      </form>

      <FooterText>
        Já possui uma conta? <a href="/login">Faça login</a>
      </FooterText>
    </CadastroContainer>
  );
};

export default Cadastro;
