// src/components/Widget.jsx
function Widget({ title, children, onDelete }) {
  return (
    // bg-white: fundo branco; rounded-lg: bordas bem arredondadas; shadow-lg: sombra grande; p-6: padding; flex flex-col: layout flexbox em coluna
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        {/* font-bold: negrito; text-xl: tamanho da fonte; text-gray-700: cor do texto */}
        <h3 className="font-bold text-xl text-gray-700">{title}</h3>
        {onDelete && (
          // text-gray-400: cor do 'x'; hover:text-red-500: muda para vermelho ao passar o mouse; transition-colors: anima a mudança de cor
          <button onClick={onDelete} className="text-gray-400 hover:text-red-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      {/* h-full: ocupa toda altura disponível; text-gray-600: cor do texto do conteúdo */}
      <div className="h-full text-gray-600">
        {children}
      </div>
    </div>
  );
}

export default Widget;