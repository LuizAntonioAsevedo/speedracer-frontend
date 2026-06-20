import Navbar from '../components/Navbar';

function BuscaMarca() {

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>Buscar por Marca</h2>

        <input
          type="text"
          className="form-control"
          placeholder="Digite a marca"
        />

      </div>
    </>
  );
}

export default BuscaMarca;