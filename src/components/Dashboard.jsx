// src/components/Dashboard.jsx (versão final)
import { useState } from 'react';
import Widget from './Widget';
import CurrencyWidget from './CurrencyWidget';

// O componente 'CurrencyWidget' precisa ser adaptado para aceitar onDelete
const CustomCurrencyWidget = ({ onDelete }) => (
    <CurrencyWidget onDelete={onDelete} /> // Passando a prop adiante
)

const WeatherWidget = ({ onDelete }) => (
  <Widget title="Clima Atual em Valinhos, SP" onDelete={onDelete}>
    <p>Ensolarado</p>
    <h2>28°C</h2>
  </Widget>
);

const TasksWidget = ({ onDelete }) => (
    <Widget title="Lista de Tarefas" onDelete={onDelete}>
        <ul><li>Aprender a deletar itens</li><li>Dominar o mundo</li></ul>
    </Widget>
);

function Dashboard() {
    const [widgets, setWidgets] = useState([
        { id: 1, type: 'weather' },
        { id: 2, type: 'currency' },
        { id: 3, type: 'tasks' },
    ]);

    // A função que REALMENTE deleta o widget
    const handleDeleteWidget = (idToDelete) => {
        // Usamos setWidgets com uma função que filtra o array anterior
        setWidgets(currentWidgets =>
            currentWidgets.filter(widget => widget.id !== idToDelete)
        );
    };

    return (
        <main className="dashboard-grid">
            {widgets.map(widget => {
                const props = {
                    key: widget.id,
                    // Passamos a função de delete, já 'sabendo' o id a ser deletado
                    onDelete: () => handleDeleteWidget(widget.id)
                };

                if (widget.type === 'weather') return <WeatherWidget {...props} />;
                if (widget.type === 'currency') return <CustomCurrencyWidget {...props} />;
                if (widget.type === 'tasks') return <TasksWidget {...props} />;
                return null;
            })}
        </main>
    );
}

export default Dashboard;