import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Catalogo from '../pages/Catalogo';
import BuscaMarca from '../pages/BuscaMarca';
import BuscaCategoria from '../pages/BuscaCategoria';
import VeiculoDetalhe from '../pages/VeiculoDetalhe';

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/catalogo"
          element={<Catalogo />}
        />

        <Route
          path="/busca-marca"
          element={<BuscaMarca />}
        />

        <Route
          path="/busca-categoria"
          element={<BuscaCategoria />}
        />

        <Route
          path="/veiculo/:id"
          element={<VeiculoDetalhe />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;