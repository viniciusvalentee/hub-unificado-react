// src/components/CurrencyWidget.jsx

import { useState, useEffect } from "react";
import Widget from "./Widget"; // Vamos reutilizar nosso container!

function CurrencyWidget({ onDelete }) {
  // 1. Estados para os dados, carregamento e erro
  const [cotacoes, setCotacoes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. O Hook useEffect para buscar os dados
  useEffect(() => {
    // 3. Função assíncrona para o fetch
    const fetchCotacoes = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
        if (!response.ok) {
          throw new Error('Falha ao buscar dados');
        }
        const data = await response.json();
        setCotacoes(data); // Sucesso: guarda os dados
      } catch (err) {
        setError(err.message); // Erro: guarda a mensagem de erro
      } finally {
        setLoading(false); // Terminou: para de carregar
      }
    };

    fetchCotacoes();
  }, []); // 4. O array de dependências vazio

  // 5. Função auxiliar para renderizar o conteúdo
  const renderContent = () => {
    if (loading) {
      return <p>Carregando cotações...</p>;
    }
    if (error) {
      return <p>Erro: {error}</p>;
    }
    if (cotacoes) {
      return (
        <>
          <p><strong>Dólar:</strong> R$ {parseFloat(cotacoes.USDBRL.bid).toFixed(2)}</p>
          <p><strong>Euro:</strong> R$ {parseFloat(cotacoes.EURBRL.bid).toFixed(2)}</p>
        </>
      );
    }
    return null;
  };

    return (
        <Widget title="Cotações Atuais" onDelete={onDelete}> {/* Passa para o Widget container */}
            {renderContent()}
        </Widget>
    );
}

export default CurrencyWidget;