// teste de listagem de produtos; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Listagem de produtos', () => {
  it('Deve retornar lista com exatamente os produtos adicionados', () => {

    // cenário
    const mercado = new Mercadinho();
    const prod1 = new Produto(7, 'Biscoito', 6, 20);
    const prod2 = new Produto(8, 'Suco', 4, 15);

    mercado.adicionarProduto(prod1);
    mercado.adicionarProduto(prod2);
    // ------------------

    // execução
    const lista = mercado.listarProdutos();
    // ------------------

    // verificação
    expect(lista).toHaveLength(2);
    expect(lista).toContain(prod1);
    expect(lista).toContain(prod2);
    // ------------------
  });

});