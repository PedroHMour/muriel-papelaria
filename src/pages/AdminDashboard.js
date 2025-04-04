import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button'; 

// Estilos para as seções
const AdminContainer = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
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

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 30px;
  color: #6b95a0;
  font-size: 14px;
`;

const ProductForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
`;

const ProductImageInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ec5288;
  background-color: #f8d9e1;
`;

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const [productData, setProductData] = useState({
    nomeProduto: '',
    descricao: '',
    preco: '',
    imagem: null,
  });

  // Função para manipulação de dados do formulário de cadastro do administrador
  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para manipulação de dados do formulário de cadastro de produto
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProductImageChange = (e) => {
    setProductData((prevState) => ({
      ...prevState,
      imagem: e.target.files[0],
    }));
  };

  const handleSubmitAdmin = async (e) => {
    e.preventDefault();

    if (adminData.senha !== adminData.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    const data = {
      nome: adminData.nome,
      email: adminData.email,
      senha: adminData.senha,
    };

    try {
      const response = await fetch('http://localhost:5181/api/account/register/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error || 'Erro ao cadastrar administrador.');
      }
    } catch (error) {
      console.error('Erro ao fazer cadastro do administrador:', error);
      alert('Erro ao fazer cadastro do administrador.');
    }
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nomeProduto', productData.nomeProduto);
    formData.append('descricao', productData.descricao);
    formData.append('preco', productData.preco);
    formData.append('imagem', productData.imagem);

    try {
      const response = await fetch('http://localhost:5181/api/products/add', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Produto cadastrado com sucesso!');
      } else {
        alert(result.error || 'Erro ao cadastrar produto.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      alert('Erro ao cadastrar produto.');
    }
  };

  return (
    <AdminContainer>
      <SectionTitle>Cadastrar Administrador</SectionTitle>
      <form onSubmit={handleSubmitAdmin}>
        <Label htmlFor="nome">Nome completo</Label>
        <Input
          type="text"
          id="nome"
          name="nome"
          value={adminData.nome}
          onChange={handleAdminChange}
          placeholder="Ex.: João Silva"
        />
        
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={adminData.email}
          onChange={handleAdminChange}
          placeholder="Ex.: admin@site.com"
        />

        <Label htmlFor="senha">Senha</Label>
        <Input
          type="password"
          id="senha"
          name="senha"
          value={adminData.senha}
          onChange={handleAdminChange}
          placeholder="Ex.: suaSenha123"
        />

        <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
        <Input
          type="password"
          id="confirmarSenha"
          name="confirmarSenha"
          value={adminData.confirmarSenha}
          onChange={handleAdminChange}
          placeholder="Ex.: suaSenha123"
        />

        <ButtonContainer>
          <Button type="submit">Cadastrar Administrador</Button>
        </ButtonContainer>
      </form>

      {/* Cadastro de Produto */}
      <SectionTitle>Cadastro de Produto</SectionTitle>
      <ProductForm onSubmit={handleSubmitProduct}>
        <Label htmlFor="nomeProduto">Nome do Produto</Label>
        <Input
          type="text"
          id="nomeProduto"
          name="nomeProduto"
          value={productData.nomeProduto}
          onChange={handleProductChange}
          placeholder="Nome do produto"
        />

        <Label htmlFor="descricao">Descrição</Label>
        <Input
          type="text"
          id="descricao"
          name="descricao"
          value={productData.descricao}
          onChange={handleProductChange}
          placeholder="Descrição do produto"
        />

        <Label htmlFor="preco">Preço</Label>
        <Input
          type="number"
          id="preco"
          name="preco"
          value={productData.preco}
          onChange={handleProductChange}
          placeholder="Preço em R$"
        />

        <Label htmlFor="imagem">Imagem do Produto</Label>
        <ProductImageInput
          type="file"
          id="imagem"
          name="imagem"
          accept="image/*"
          onChange={handleProductImageChange}
        />

        <ButtonContainer>
          <Button type="submit">Cadastrar Produto</Button>
        </ButtonContainer>
      </ProductForm>

      <FooterText>
        Quer voltar para o dashboard? <a href="/admin/dashboard">Ir para o dashboard</a>
      </FooterText>
    </AdminContainer>
  );
};

export default AdminDashboard;
