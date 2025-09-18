// teste de remoção de produto existente; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Remoção de produto existente', () => {
  it('Ao remover um produto válido, o método deve retornar true. O produto não deve mais aparecer na lista.', () => {

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
