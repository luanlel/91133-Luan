// teste de limpeza da lista; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Limpeza da lista', () => {
  it('Deve esvaziar a lista após chamar limpar()', () => {
    // cenário
    const mercado = new Mercadinho();
    mercado.adicionarProduto(new Produto(9, 'Farinha', 7, 9));
    mercado.adicionarProduto(new Produto(10, 'Óleo', 15, 4));
    // ------------------

    // execução
    mercado.limpar();
    // ------------------

    // verificação
    expect(mercado.listarProdutos()).toHaveLength(0);
    // ------------------
  });
  
});