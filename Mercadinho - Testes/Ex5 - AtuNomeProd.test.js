// teste de atualização de nome do produto; Luan de Lima; 18/09/2025


const { Produto, Mercadinho } = require('./Mercadinho');

describe('Atualização de nome do produto', () => {
  it('Deve atualizar apenas o nome e manter os outros campos', () => {

    // cenário
    const mercado = new Mercadinho();
    const prod = new Produto(3, 'Leite', 4, 7);

    mercado.adicionarProduto(prod);
    // ------------------

    // execução
    const resultado = mercado.atualizarProduto(3, { nome: 'Leite Integral' });
    // ------------------

    // verificação
    expect(resultado).toBe(true);
    const atualizado = mercado.buscarProduto(3);
    expect(atualizado.nome).toBe('Leite Integral');
    expect(atualizado.preco).toBe(4);
    expect(atualizado.quantidade).toBe(7);
    // ------------------
  });

});