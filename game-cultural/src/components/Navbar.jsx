import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const linkClass = (path) => 
    `px-4 py-2 font-semibold transition ${
      location.pathname === path
        ? 'bg-[var(--primary-hover)] rounded-lg text-white'
        : 'hover:text-[var(--primary-hover)] text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[var(--primary)] border-b border-[var(--primary)] shadow-md backdrop-blur-md flex justify-around items-center px-6 py-4">
      <h1 className='p-2 text-lg font-bold text-indigo-900'> Game cultural </h1>
      <Link to="/" className={linkClass("/")}>Filmes</Link>
      <Link to="/lendas" className={linkClass("/lendas")}>Lendas</Link>
      <Link to="/quiz" className={linkClass("/quiz")}>Quiz</Link>
    </nav>
  );
}

export default Navbar;
