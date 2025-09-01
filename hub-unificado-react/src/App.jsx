// src/App.jsx
import { useState, useEffect } from 'react';
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import LoginForm from './components/LoginForm';

function App() {
  // Tenta pegar o token do localStorage ao iniciar
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  // Se o token mudar, atualiza o localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }, [token]);


  // Se não houver token, mostra a tela de login
  if (!token) {
    return <div className="min-h-screen bg-slate-100"><LoginForm onLoginSuccess={setToken} /></div>;
  }

  // Se houver token, mostra o dashboard
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;