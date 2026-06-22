import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BuscaCategoria() {

  return (
    <>
      <Navbar />

      <div className="container mt-5 page-container">

        <h2>Buscar por Categoria</h2>

        <select className="form-select">

          <option>SUV</option>
          <option>Sedan</option>
          <option>Hatch</option>
          <option>Pickup</option>

        </select>

      </div>

      <Footer />

    </>
  );
}

export default BuscaCategoria;