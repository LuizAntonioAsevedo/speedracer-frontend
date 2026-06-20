import Navbar from '../components/Navbar';

function BuscaCategoria() {

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>Buscar por Categoria</h2>

        <select className="form-select">

          <option>SUV</option>
          <option>Sedan</option>
          <option>Hatch</option>
          <option>Pickup</option>

        </select>

      </div>
    </>
  );
}

export default BuscaCategoria;