// teste de tentativa de remoção de produto inexistente; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Tentativa de remoção de produto inexistente', () => {
  it('Deve retornar false e não alterar a lista', () => {

    // cenário
    const mercado = new Mercadinho();
    const prod = new Produto(6, 'Sal', 2, 12);

    mercado.adicionarProduto(prod);
    // ------------------

    // execução
    const resultado = mercado.removerProduto(99);
    // ------------------

    // verificação
    expect(resultado).toBe(false);
    expect(mercado.listarProdutos()).toHaveLength(1);
    expect(mercado.listarProdutos()[0]).toEqual(prod);
    // ------------------
  });
});