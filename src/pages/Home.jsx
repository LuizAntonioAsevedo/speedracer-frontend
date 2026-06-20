import Navbar from '../components/Navbar';

function Home() {

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="text-center">

          <h1>🚗 Revenda Top Cars</h1>

          <p className="lead">
            Encontre o veículo ideal para você.
          </p>

        </div>

      </div>
    </>
  );
}

export default Home;