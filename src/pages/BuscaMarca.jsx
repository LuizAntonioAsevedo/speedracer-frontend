import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BuscaMarca() {

  return (
    <>
      <Navbar />

      <div className="container mt-5 page-container">

        <h2>Buscar por Marca</h2>

        <input
          type="text"
          className="form-control"
          placeholder="Digite a marca"
        />

      </div>

      <Footer />

    </>
  );
}

export default BuscaMarca;