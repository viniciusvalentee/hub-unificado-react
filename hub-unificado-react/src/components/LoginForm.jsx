// src/components/LoginForm.jsx
import { useState } from 'react';
import { login } from '../services/api'; // Importamos nossa função de login

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    setError(''); // Limpa erros antigos

    try {
      const response = await login(email, password);
      // O login foi bem-sucedido!
      console.log('Token recebido:', response.data.token);
      // Armazenamos o token no localStorage do navegador
      localStorage.setItem('authToken', response.data.token);
      onLoginSuccess(response.data.token); // Avisa o componente pai
    } catch (err) {
      // Ocorreu um erro
      setError('Email ou senha inválidos. Tente novamente.');
      console.error('Falha no login:', err);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
        {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}