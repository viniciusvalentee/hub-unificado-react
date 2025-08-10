// src/components/Widget.jsx (com desestruturação)
// Em vez de 'props', pegamos 'title' e 'children' diretamente do objeto.
function Widget({ title, children }) {
  return (
    <div className="widget">
      <h3 className="widget-title">{title}</h3>
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
}

export default Widget;