import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contato() {
  return (
    <>
      <Navbar />

      <div className="container mt-5 page-container">

        <h1>Contato</h1>

        <hr />

        <div className="row">

          <div className="col-md-6">

            <h4>Informações</h4>

            <p>
              📞 Telefone: (11) 4000-1234
            </p>

            <p>
              📱 WhatsApp: (11) 99999-9999
            </p>

            <p>
              📧 E-mail: contato@speedracer.com.br
            </p>

            <p>
              📍 Endereço: Av. Paulista, 1000 - São Paulo/SP
            </p>

          </div>

          <div className="col-md-6">

            <h4>Envie uma mensagem</h4>

            <form>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Mensagem"
                />
              </div>

              <button
                className="btn btn-primary"
                type="submit"
              >
                Enviar
              </button>

            </form>

          </div>

        </div>

      </div>

      <Footer />
      
    </>
  );
}

export default Contato;