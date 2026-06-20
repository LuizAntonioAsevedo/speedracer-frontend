import api from './api';

const carroService = {

  listarTodos() {
    return api.get('/api/veiculos');
  },

  buscarPorId(id) {
    return api.get(`/api/veiculos/${id}`);
  },

  buscarPorMarca(marca) {
    return api.get(`/api/veiculos/marca/${marca}`);
  },

  buscarPorCategoria(categoria) {
    return api.get(`/api/veiculos/categoria/${categoria}`);
  }

};

export default carroService;