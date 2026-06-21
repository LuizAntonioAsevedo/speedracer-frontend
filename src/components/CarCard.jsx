import { useNavigate } from 'react-router-dom';

function CarCard({ carro }) {

  const navigate = useNavigate();

  return (
    <div
      className="card shadow-sm h-100"
      style={{
        transition: '0.3s',
        cursor: 'pointer'
      }}
    >
      <img
        src={carro.imagem}
        className="card-img-top"
        alt={carro.modelo}
        style={{
          height: '220px',
          objectFit: 'cover'
        }}
      />

      <div className="card-body">

        <h5 className="card-title">
          {carro.marca} {carro.modelo}
        </h5>

        <p className="card-text">
          <strong>Ano:</strong> {carro.ano}
        </p>

        <p className="card-text">
          <strong>Preço:</strong> R$ {carro.preco.toLocaleString('pt-BR')}
        </p>

        <button
          className="btn btn-dark w-100"
          onClick={() => navigate(`/veiculo/${carro.id}`)}
        >
          Ver Detalhes
        </button>

      </div>
    </div>
  );
}

export default CarCard;