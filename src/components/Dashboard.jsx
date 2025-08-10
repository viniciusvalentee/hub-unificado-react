// src/components/Dashboard.jsx
import Widget from './Widget'; // Importando nosso componente

function Dashboard() {
  return (
    <main className="dashboard-grid">
      <Widget />
      <Widget />
      <Widget />
    </main>
  );
}

export default Dashboard;