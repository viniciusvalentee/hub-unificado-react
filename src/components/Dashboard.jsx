// src/components/Dashboard.jsx
import { useState } from 'react';
import Widget from './Widget';
import CurrencyWidget from './CurrencyWidget'; // 1. Importe o novo componente

function Dashboard() {
  const [widgets, setWidgets] = useState([
    // Apenas para exemplo, não faremos uma lista dinâmica complexa ainda
    { id: 1, type: 'weather' },
    { id: 2, type: 'currency' }, // 2. Marcamos que este é do tipo 'currency'
    { id: 3, type: 'tasks' },
  ]);

  const handleAddWidget = () => {
    // Lógica de adicionar será melhorada no futuro
    console.log("Adicionar novo widget");
  };

  return (
    <>
      <div style={{ padding: '24px', paddingBottom: 0 }}>
        <button onClick={handleAddWidget}>Adicionar Widget</button>
      </div>

      <main className="dashboard-grid">
        {/* Renderização temporária, vamos melhorar isso */}
        <Widget title="Clima Atual em Valinhos, SP">
            <p>Ensolarado</p>
            <h2>28°C</h2>
        </Widget>
        
        {/* 3. Aqui usamos nosso novo componente */}
        <CurrencyWidget />

        <Widget title="Lista de Tarefas">
          <ul><li>Aprender sobre useEffect</li><li>Fazer o commit do projeto</li></ul>
        </Widget>
      </main>
    </>
  );
}

export default Dashboard;