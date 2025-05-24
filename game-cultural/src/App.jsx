import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filmes from './pages/Filmes';
import Lendas from './pages/Lendas';
import Quiz from './pages/Quiz';
import Navbar from './components/Navbar';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/lendas" element={<Lendas />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;