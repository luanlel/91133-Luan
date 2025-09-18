// teste de cadastro de produto válido; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Cadastro de produto válido', () => {
  it('Ao adicionar um produto novo com ID único, o método deve retornar true.', () => {

    // cenário
    const mercado = new Mercadinho();
    const prod = new Produto(1, 'Arroz', 10, 5);
    // ------------------

    // execução
    const resultado = mercado.adicionarProduto(prod);
    // ------------------

    // verificação
    expect(resultado).toBe(true);
    expect(mercado.listarProdutos()).toContain(prod);
    // ------------------
  });

});