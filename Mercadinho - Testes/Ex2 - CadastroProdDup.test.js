// teste de cadastro de produto duplicado; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Cadastro de produto duplicado', () => {
  it('Ao tentar adicionar um produto com um ID já existente, o método deve retornar false.', () => {

    // cenário
    const mercado = new Mercadinho();
    const prod1 = new Produto(1, 'Arroz', 10, 5);
    const prod2 = new Produto(1, 'Feijão', 8, 3);

    mercado.adicionarProduto(prod1);
    // ------------------

    // execução
    const resultado = mercado.adicionarProduto(prod2);
    // ------------------

    // verificação
    expect(resultado).toBe(false);
    expect(mercado.listarProdutos()).toHaveLength(1);
    expect(mercado.listarProdutos()[0]).toEqual(prod1);
    // ------------------
  });
  
});