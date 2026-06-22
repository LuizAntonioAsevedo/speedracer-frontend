import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Sobre() {
  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        <h1 className="text-center mb-5">
          Sobre a Speed Racer
        </h1>

        <div className="card shadow p-4 mb-4">
          <h3>Propósito</h3>

          <p>
            Facilitar o acesso das pessoas a produtos
            de mobilidade e serviços relacionados.
          </p>
        </div>

        <div className="card shadow p-4 mb-4">
          <h3>Missão</h3>

          <p>
            Viabilizar aos nossos clientes a melhor
            solução de mobilidade e serviços relacionados.
          </p>
        </div>

        <div className="card shadow p-4 mb-4">
          <h3>Visão</h3>

          <p>
            Ser reconhecida como um dos maiores grupos
            de soluções de mobilidade do Brasil,
            destacando-se pela ética, inovação e excelência.
          </p>
        </div>

        <div className="card shadow p-4 mb-4">
          <h3>Valores</h3>

          <ul>
            <li>
              Excelente experiência para nossos clientes.
            </li>

            <li>
              Ética, transparência e respeito.
            </li>

            <li>
              Agilidade e inovação contínua.
            </li>

            <li>
              Simplicidade e objetividade.
            </li>

            <li>
              Reconhecimento justo dos colaboradores.
            </li>

            <li>
              Pessoas são nosso maior diferencial.
            </li>
          </ul>
        </div>

        <div className="card shadow p-4">
          <h3>Código de Conduta</h3>

          <p>
            Nosso Código de Conduta descreve os valores
            que orientam nossas atividades, garantindo
            responsabilidade, ética e transparência em
            todas as relações.
          </p>

          <p>
            Todos os colaboradores são incentivados a
            conhecer e aplicar essas diretrizes em suas
            atividades diárias.
          </p>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Sobre;