import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          🏁 Speed Racer
        </Link>

        <div className="navbar-nav">

          <Link
            className="nav-link"
            to="/"
          >
            Home
          </Link>

          <Link
            className="nav-link"
            to="/catalogo"
          >
            Catálogo
          </Link>

          <Link
            className="nav-link"
            to="/busca-marca"
          >
            Marca
          </Link>

          <Link
            className="nav-link"
            to="/busca-categoria"
          >
            Categoria
          </Link>

          <Link
            className="nav-link"
            to="/dashboard"
          >
            Dashboard
          </Link>

          <Link
            className="nav-link"
            to="/contato"
          >
            Contato
          </Link>

          <Link
            className="nav-link"
            to="/login"
          >
            Login
          </Link>

          <Link
            className="nav-link"
            to="/sobre"
          >
            Sobre Nós
          </Link> 

        </div>

      </div>

    </nav>
  );
}

export default Navbar;