function Footer() {
  return (
    <footer
      className="bg-dark text-white mt-5 py-4"
    >
      <div className="container">

        <div className="row">

          <div className="col-md-4">
            <h5>🏁 Speed Racer</h5>

            <p>
              Veículos novos e seminovos com qualidade,
              procedência e confiança.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Contato</h5>

            <p>📍 São Paulo - SP</p>
            <p>📞 (11) 99999-9999</p>
            <p>✉ contato@speedracer.com.br</p>
          </div>

          <div className="col-md-4">
            <h5>Horário</h5>

            <p>Segunda a Sexta</p>
            <p>08:00 às 18:00</p>

            <p>Sábado</p>
            <p>08:00 às 13:00</p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          © 2026 Speed Racer - Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}

export default Footer;