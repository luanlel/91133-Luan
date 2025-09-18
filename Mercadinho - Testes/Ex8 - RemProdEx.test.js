// teste de remoção de produto existente; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Remoção de produto existente', () => {
  it('Deve remover produto válido e retornar true', () => {

    // cenário
    const mercado = new Mercadinho();
    const prod = new Produto(5, 'Açúcar', 3, 8);
    mercado.adicionarProduto(prod);
    // ------------------

    // execução
    const resultado = mercado.removerProduto(5);
    // ------------------

    // verificação
    expect(resultado).toBe(true);
    expect(mercado.buscarProduto(5)).toBeNull();
    // ------------------
  });
  
});