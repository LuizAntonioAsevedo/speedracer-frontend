import Navbar from '../components/Navbar';

function Dashboard() {

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>Dashboard</h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card p-3">
              <h4>Total de Veículos</h4>
              <h2>0</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h4>Disponíveis</h4>
              <h2>0</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h4>Estoque</h4>
              <h2>R$ 0</h2>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;