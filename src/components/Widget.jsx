// src/components/Widget.jsx

function Widget({ title, children, onDelete }) { // 1. Recebe a prop onDelete
  return (
    <div className="widget">
      <div className="widget-header">
        <h3 className="widget-title">{title}</h3>
        {/* 2. Se a função onDelete existir, mostra o botão */}
        {onDelete && (
          <button onClick={onDelete} className="delete-button">
            &times; {/* Este é o caractere 'x' de fechar */}
          </button>
        )}
      </div>
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
}

export default Widget;