import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="nav-container">
      <h2>Bem-vindo ao Game Cultural!</h2>
      <p>Explore as riquezas da cultura brasileira:</p>
      <nav>
        <Link to="/filmes">🎬 Filmes Brasileiros</Link>
        <Link to="/lendas">🧙‍♀️ Lendas Brasileiras</Link>
        <Link to="/quiz">🧠 Quiz Cultural</Link>
      </nav>
    </div>
  );
}

export default Home;
