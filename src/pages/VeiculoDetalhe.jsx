import Navbar from '../components/Navbar';

function VeiculoDetalhe() {

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>Toyota Corolla</h2>

        <hr />

        <p>Marca: Toyota</p>

        <p>Modelo: Corolla</p>

        <p>Ano: 2024</p>

        <p>KM: 10.000</p>

        <p>Preço: R$ 135.000</p>

      </div>
    </>
  );
}

export default VeiculoDetalhe;