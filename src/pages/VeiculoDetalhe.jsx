import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

import corolla from '../assets/carros/corolla.jpeg';
import civic from '../assets/carros/civic.jpeg';
import compass from '../assets/carros/compass.jpeg';
import bmw320i from '../assets/carros/bmw320i.jpeg';

function VeiculoDetalhe() {

  const { id } = useParams();

  const veiculos = [
    {
      id: 1,
      marca: 'Toyota',
      modelo: 'Corolla',
      ano: 2024,
      km: '10.000',
      cambio: 'Automático',
      combustivel: 'Flex',
      preco: 135000,
      imagem: corolla
    },
    {
      id: 2,
      marca: 'Honda',
      modelo: 'Civic',
      ano: 2023,
      km: '15.000',
      cambio: 'Automático',
      combustivel: 'Flex',
      preco: 145000,
      imagem: civic
    },
    {
      id: 3,
      marca: 'Jeep',
      modelo: 'Compass',
      ano: 2024,
      km: '8.000',
      cambio: 'Automático',
      combustivel: 'Flex',
      preco: 180000,
      imagem: compass
    },
    {
      id: 4,
      marca: 'BMW',
      modelo: '320i',
      ano: 2024,
      km: '5.000',
      cambio: 'Automático',
      combustivel: 'Gasolina',
      preco: 320000,
      imagem: bmw320i
    }
  ];

  const veiculo = veiculos.find(
    (v) => v.id === Number(id)
  );

  if (!veiculo) {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <h2>Veículo não encontrado.</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="row">

          <div className="col-md-6">

            <img
              src={veiculo.imagem}
              alt={veiculo.modelo}
              className="img-fluid rounded shadow"
            />

          </div>

          <div className="col-md-6">

            <h1>
              {veiculo.marca} {veiculo.modelo}
            </h1>

            <hr />

            <h2 className="text-success">
              R$ {veiculo.preco.toLocaleString('pt-BR')}
            </h2>

            <p>
              <strong>Marca:</strong> {veiculo.marca}
            </p>

            <p>
              <strong>Modelo:</strong> {veiculo.modelo}
            </p>

            <p>
              <strong>Ano:</strong> {veiculo.ano}
            </p>

            <p>
              <strong>KM:</strong> {veiculo.km}
            </p>

            <p>
              <strong>Câmbio:</strong> {veiculo.cambio}
            </p>

            <p>
              <strong>Combustível:</strong> {veiculo.combustivel}
            </p>

            <button className="btn btn-primary btn-lg mt-3">
              Tenho Interesse
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default VeiculoDetalhe;