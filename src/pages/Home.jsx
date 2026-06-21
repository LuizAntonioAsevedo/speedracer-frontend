import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        {/* Banner Principal */}

        <div className="text-center p-5 bg-dark text-white rounded">

          <h1 className="display-4">
            🏁 Speed Racer
          </h1>

          <p className="lead">
            Encontre o veículo ideal para você.
          </p>

          <Link
            to="/catalogo"
            className="btn btn-warning btn-lg"
          >
            Ver Catálogo
          </Link>

        </div>

        {/* História */}

        <div className="mt-5">

          <h2>Nossa História</h2>

          <hr />

          <p>
            A Speed Racer nasceu com o objetivo de oferecer
            veículos novos e seminovos com qualidade,
            procedência garantida e atendimento diferenciado.
          </p>

          <p>
            Trabalhamos com as melhores marcas do mercado,
            oferecendo segurança, transparência e as melhores
            condições para nossos clientes.
          </p>

        </div>

        {/* Diferenciais */}

        <div className="mt-5">

          <h2>Nossos Diferenciais</h2>

          <hr />

          <div className="row">

            <div className="col-md-3">
              <div className="card p-3 text-center">
                ✓ Veículos Revisados
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 text-center">
                ✓ Garantia
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 text-center">
                ✓ Financiamento Facilitado
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 text-center">
                ✓ Avaliação do seu usado
              </div>
            </div>

          </div>

        </div>

        {/* Veículos Destaque */}

        <div className="mt-5 mb-5">

          <h2>Veículos em Destaque</h2>

          <hr />

          <div className="row">

            <div className="col-md-3">
              <div className="card p-3 text-center">
                Toyota Corolla
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 text-center">
                Honda Civic
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 text-center">
                Jeep Compass
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 text-center">
                BMW 320i
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Home;