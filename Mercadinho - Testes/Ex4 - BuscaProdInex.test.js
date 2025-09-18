// teste de busca de produto inexistente; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Busca de produto inexistente', () => {
  it('Deve retornar null ao buscar produto com ID inexistente', () => {

    // cenário
    const mercado = new Mercadinho();
    // ------------------

    // execução
    const resultado = mercado.buscarProduto(99);
    // ------------------

    // verificação
    expect(resultado).toBeNull();
    // ------------------
  });
  
});