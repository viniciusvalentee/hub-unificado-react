// src/App.jsx
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    // Fundo cinza claro para toda a aplicação
    <div className="min-h-screen bg-slate-100">
      <Header />
      <Dashboard />
    </div>
  )
}

export default App;