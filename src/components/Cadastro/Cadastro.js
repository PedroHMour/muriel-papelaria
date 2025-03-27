import React,{ useState } from 'react';
import axios from 'axios';
import '../Cadastro.css';

const Cadastro = () => {
    const [formatData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        confirmSenha: ''
    });

    const handleChange = (e) => {
        setFormData({
        ...formatData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //Verifica se as senhas concidem
        if (formatData.senha !== formatData.confirmSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        try {
            const response = awaite axios.post('http://localhost:5000/api/cadastro', formatData);
            console.log('Cadastra realizado com sucesso!', response);
            // Redirecionar ou mostrar mensagem de sucesso
        }catch(error) {
                console.error('Erro no cadastro', error);
            }
        };

        return (
            <div className="cadastro-container">
                <h2>Cadastro</h2>
                <form onSubmit={handleSubmit} className="cadastro-form">
                    <input 
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                        value={formatData.nome}
                        onChange={handleChange}
                        required
                    />    
                    <input 
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formatData.email}
                        onChange={handleChange}
                        required
                    />    
                    <input 
                        type="tel"
                        name="telefone"
                        placeholder="Telefone"
                        value={formatData.telefone}
                        onChange={handleChange}
                        required
                    />    
                    <input 
                        type="password"
                        name="senha"
                        placeholder="Nome completo"
                        value={formatData.senha}
                        onChange={handleChange}
                        required
                    />    

                    <input 
                        type="password"
                        name="confirmSenha"
                        placeholder="Confirmar senha"
                        value={formatData.confirmSenha}
                        onChange={handleChange}
                        required
                    />    
                    <button type="submit" className="cadastro-btn">Criar conta</button>
                </form>
            </div>
        );
    };

    export default Cadastro;