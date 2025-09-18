// teste de controle de estoque; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Controle de estoque', () => {
  it('Ao atualizar a quantidade de um produto, a alteração deve ser refletida corretamente.', () => {

    // cenário
    const mercado = new Mercadinho();
    const prod = new Produto(11, 'Manteiga', 20, 2);
    mercado.adicionarProduto(prod);
    // ------------------

    // execução
    mercado.atualizarProduto(11, { quantidade: 10 });
    // ------------------

    // verificação
    const atualizado = mercado.buscarProduto(11);
    expect(atualizado.quantidade).toBe(10);
    // ------------------
  });
  
});
