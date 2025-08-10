// src/components/Dashboard.jsx (com o botão de adicionar)
import { useState } from 'react';
import Widget from './Widget';

function Dashboard() {
  const initialWidgets = [
    { id: 1, title: 'Clima Atual em Valinhos, SP', content: <><p>Ensolarado</p><h2>28°C</h2></> },
    { id: 2, title: 'Cotações', content: <><p><strong>Dólar:</strong> R$ 5,15</p><p><strong>Euro:</strong> R$ 5,50</p></> },
    { id: 3, title: 'Lista de Tarefas', content: <ul><li>Aprender sobre State no React</li><li>Fazer o commit do projeto</li></ul> },
  ];

  const [widgets, setWidgets] = useState(initialWidgets);

  const handleAddWidget = () => {
    const newWidget = {
      // Usamos a data atual em milissegundos para garantir um ID único
      id: Date.now(),
      title: 'Novo Widget',
      content: <p>Conteúdo a ser definido.</p>
    };
    
    // Atualizamos o estado, criando um NOVO array com o item adicionado
    setWidgets([...widgets, newWidget]);
  };

  return (
    <> {/* Usando Fragment para agrupar o botão e o main */}
      <div style={{ padding: '24px', paddingBottom: 0 }}>
        <button onClick={handleAddWidget}>Adicionar Widget</button>
      </div>

      <main className="dashboard-grid">
        {widgets.map(widget => (
          <Widget key={widget.id} title={widget.title}>
            {widget.content}
          </Widget>
        ))}
      </main>
    </>
  );
}

export default Dashboard;