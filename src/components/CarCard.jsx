function CarCard({ carro }) {

  return (

    <div className="card">

      <div className="card-body">

        <h5>{carro.modelo}</h5>

        <p>{carro.marca}</p>

        <p>{carro.ano}</p>

        <p>R$ {carro.preco}</p>

      </div>

    </div>

  );
}

export default CarCard;