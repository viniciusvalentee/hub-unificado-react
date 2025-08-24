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
        // p-6: padding
        <main className="p-6">
            {/* grid: layout de grid; gap-6: espaçamento entre os itens; grid-cols-1: 1 coluna em telas pequenas;
                md:grid-cols-2: 2 colunas em telas médias; lg:grid-cols-3: 3 colunas em telas grandes */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {widgets.map(widget => {
                    const props = {
                        key: widget.id,
                        onDelete: () => handleDeleteWidget(widget.id)
                    };

                    // O mapeamento continua igual, ele vai renderizar os componentes que já usam Tailwind
                    if (widget.type === 'weather') return <WeatherWidget {...props} />;
                    if (widget.type === 'currency') return <CustomCurrencyWidget {...props} />;
                    if (widget.type === 'tasks') return <TasksWidget {...props} />;
                    return null;
                })}
            </div>
        </main>
    );
}

export default Dashboard;