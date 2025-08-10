// src/components/Dashboard.jsx
import Widget from './Widget';

function Dashboard() {
  return (
    <main className="dashboard-grid">

      {/* Primeiro Widget: Clima */}
      <Widget title="Clima Atual em Valinhos, SP">
        <p>Ensolarado</p>
        <h2>28°C</h2>
      </Widget>

      {/* Segundo Widget: Cotação de Moedas */}
      <Widget title="Cotações">
        <p><strong>Dólar:</strong> R$ 5,15</p>
        <p><strong>Euro:</strong> R$ 5,50</p>
      </Widget>

      {/* Terceiro Widget: Tarefas */}
      <Widget title="Lista de Tarefas">
        <ul>
          <li>Aprender sobre Props no React</li>
          <li>Fazer o commit do projeto</li>
        </ul>
      </Widget>

    </main>
  );
}

export default Dashboard;