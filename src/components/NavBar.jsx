import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle, FaRandom, FaListUl } from "react-icons/fa";
import logo from "../assets/logo.png";
import letras from "../assets/letras.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-opacity-80 bg-[#1a428a] border-b border-[#e9be6c]">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-24 h-24 animate-spin-slow" />
          <img src={letras} alt="Letras" className="h-24 w-auto" />
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={24} />
        </button>
        <div className={`md:flex gap-4 ${menuOpen ? "block" : "hidden"}`}>
          <Link to="/" className="block md:inline"><FaRandom size={24} /></Link>
          <Link to="/premios-sorteados" className="block md:inline"><FaListUl size={24} /></Link>
        </div>
        <FaUserCircle size={32} className="hidden md:block" />
      </nav>
      <hr className="border-2 border-[#e9be6c]" />
    </>
  );
}

export default NavBar;
