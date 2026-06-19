import Navbar from '../components/Navbar';

function Login() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card p-4">

              <h2 className="text-center mb-4">
                Login
              </h2>

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    E-mail
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu e-mail"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Senha
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Digite sua senha"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Entrar
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;