
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

import bannerHome from '../assets/banners/banner-home.jpeg';

import corolla from '../assets/carros/corolla.jpeg';
import civic from '../assets/carros/civic.jpeg';
import compass from '../assets/carros/compass.jpeg';
import bmw320i from '../assets/carros/bmw320i.jpeg';

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        {/* Banner Principal */}

        <div
          className="rounded d-flex align-items-center text-white"
          style={{
            backgroundImage: 'url(' + bannerHome + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '500px'
     }}
        >
          <div className="p-5">

            <h1 className="display-3 fw-bold">
              🏁 Speed Racer
            </h1>

            <p className="lead">
              Os melhores veículos do mercado em um só lugar.
            </p>

            <Link
              to="/catalogo"
              className="btn btn-warning btn-lg"
            >
              Ver Catálogo
            </Link>

          </div>
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

        {/* Veículos em Destaque */}

        <div className="mt-5 mb-5">

          <h2>Veículos em Destaque</h2>

          <hr />

          <div className="row">

            <div className="col-md-3 mb-4">

              <div
                className="card shadow h-100"
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => navigate('/veiculo/1')}
              >

                <img
                  src={corolla}
                  className="card-img-top"
                  alt="Toyota Corolla"
                  style={{
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    Toyota Corolla
                  </h5>

                  <p>Ano: 2024</p>

                  <h5 className="text-success">
                    R$ 135.000
                  </h5>

                  <button className="btn btn-dark w-100">
                    Ver Detalhes
                  </button>

                </div>

              </div>

            </div>

            <div className="col-md-3 mb-4">

              <div
                className="card shadow h-100"
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => navigate('/veiculo/2')}
              >

                <img
                  src={civic}
                  className="card-img-top"
                  alt="Honda Civic"
                  style={{
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    Honda Civic
                  </h5>

                  <p>Ano: 2023</p>

                  <h5 className="text-success">
                    R$ 145.000
                  </h5>

                  <button className="btn btn-dark w-100">
                    Ver Detalhes
                  </button>

                </div>

              </div>

            </div>

            <div className="col-md-3 mb-4">

              <div
                className="card shadow h-100"
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => navigate('/veiculo/3')}
              >

                <img
                  src={compass}
                  className="card-img-top"
                  alt="Jeep Compass"
                  style={{
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    Jeep Compass
                  </h5>

                  <p>Ano: 2024</p>

                  <h5 className="text-success">
                    R$ 180.000
                  </h5>

                  <button className="btn btn-dark w-100">
                    Ver Detalhes
                  </button>

                </div>

              </div>

            </div>

            <div className="col-md-3 mb-4">

              <div
                className="card shadow h-100"
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => navigate('/veiculo/4')}
              >

                <img
                  src={bmw320i}
                  className="card-img-top"
                  alt="BMW 320i"
                  style={{
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    BMW 320i
                  </h5>

                  <p>Ano: 2024</p>

                  <h5 className="text-success">
                    R$ 295.000
                  </h5>

                  <button className="btn btn-dark w-100">
                    Ver Detalhes
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Home;

