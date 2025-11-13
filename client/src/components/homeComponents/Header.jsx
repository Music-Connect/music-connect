import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-8 md:px-16">
      <div className="text-4xl font-black text-yellow-300">
        Music
        <span className="bg-linear-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent">
          Connect
        </span>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          to="/"
          className="text-white hover:text-yellow-300 transition-colors"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-white hover:text-yellow-300 transition-colors"
        >
          Descobrir
        </Link>
        <Link
          to="/profileSelector"
          className="text-white hover:text-yellow-300 transition-colors"
        >
          Criar
        </Link>
        <Link
          to="/login"
          className="text-white hover:text-yellow-300 transition-colors"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
