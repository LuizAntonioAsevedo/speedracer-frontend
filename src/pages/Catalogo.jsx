import Navbar from '../components/Navbar';
import CarCard from '../components/CarCard';

function Catalogo() {

  const carros = [
    {
      id: 1,
      marca: 'Toyota',
      modelo: 'Corolla',
      ano: 2024,
      preco: 135000
    },
    {
      id: 2,
      marca: 'Honda',
      modelo: 'Civic',
      ano: 2023,
      preco: 145000
    },
    {
      id: 3,
      marca: 'Jeep',
      modelo: 'Compass',
      ano: 2024,
      preco: 180000
    }
  ];

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>Catálogo de Veículos</h2>

        <div className="row">

          {carros.map((carro) => (

            <div
              key={carro.id}
              className="col-md-4 mb-3"
            >

              <CarCard carro={carro} />

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default Catalogo;