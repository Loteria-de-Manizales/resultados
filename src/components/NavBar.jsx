import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between p-4 bg-opacity-80 bg-[#1a428a]">
      <img src={logo} alt="Logo" className="w-12 h-12 animate-spin-slow" />
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars size={24} />
      </button>
      <div className={`md:flex gap-4 ${menuOpen ? "block" : "hidden"}`}>
        <Link to="/" className="block md:inline">PREMIO ACTUAL</Link>
        <Link to="/premios-sorteados" className="block md:inline">PREMIOS SORTEADOS</Link>
      </div>
      <FaUserCircle size={32} className="hidden md:block" />
    </nav>
  );
}
export default NavBar;