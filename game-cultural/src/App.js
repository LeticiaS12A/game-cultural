import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Filmes from "./components/Filmes";
import Lendas from "./components/Lendas";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>🎮 Game Cultural Brasileiro</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/lendas" element={<Lendas />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
