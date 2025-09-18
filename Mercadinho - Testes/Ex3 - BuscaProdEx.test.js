// teste de busca de produto existente; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Busca de produto existente', () => {
  it('Deve retornar o objeto correto ao buscar produto válido', () => {

    // cenário
    const mercado = new Mercadinho();
    const prod = new Produto(2, 'Macarrão', 5, 10);

    mercado.adicionarProduto(prod);
    // ------------------

    // execução
    const resultado = mercado.buscarProduto(2);
    // ------------------

    // verificação
    expect(resultado).toBe(prod);
    expect(resultado.nome).toBe('Macarrão');
    expect(resultado.preco).toBe(5);
    expect(resultado.quantidade).toBe(10);
    // ------------------
  });
  
});