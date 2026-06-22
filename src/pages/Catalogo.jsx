import Navbar from '../components/Navbar';
import CarCard from '../components/CarCard';
import Footer from '../components/Footer';

import corolla from '../assets/carros/corolla.jpeg';
import civic from '../assets/carros/civic.jpeg';
import compass from '../assets/carros/compass.jpeg';
import bmw320i from '../assets/carros/bmw320i.jpeg';

function Catalogo() {

const carros = [
  {
    id: 1,
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2024,
    preco: 135000,
    imagem: corolla
  },
  {
    id: 2,
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2023,
    preco: 145000,
    imagem: civic
  },
  {
    id: 3,
    marca: 'Jeep',
    modelo: 'Compass',
    ano: 2024,
    preco: 180000,
    imagem: compass
  },
  {
    id: 4,
    marca: 'BMW',
    modelo: '320i',
    ano: 2024,
    preco: 320000,
    imagem: bmw320i
  }
];

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <div className="text-center mb-4">
          <h1>🚗 Catálogo Speed Racer</h1>
          <p className="lead">
            Encontre o veículo ideal para você.
          </p>
        </div>

        <div className="row">

          {carros.map((carro) => (

            <div
              key={carro.id}
              className="col-md-4 mb-4"
            >

              <CarCard carro={carro} />

            </div>

          ))}

        </div>

      </div>

      <Footer />
      
    </>
  );
}

export default Catalogo;