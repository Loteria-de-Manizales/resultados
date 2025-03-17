import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import PremioActualPage from "./pages/PremioActual";
import PremiosSorteados from "./pages/PremiosSorteados";

function App() {
  return (
    <Router>
      <div className="bg-[#1a428a] text-[#e9be6c] min-h-screen">
        <NavBar />
        <div className="container mx-auto p-4">
          <div className="flex justify-between text-lg font-bold">
            <span>SORTEO:</span>
            <span>FECHA:</span>
          </div>
          <Routes>
            <Route path="/" element={<PremioActualPage />} />
            <Route path="/premios-sorteados" element={<PremiosSorteados />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;