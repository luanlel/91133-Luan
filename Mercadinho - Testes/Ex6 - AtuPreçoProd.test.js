// teste de atualização de preço do produto; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Atualização de preço do produto', () => {
  it('Ao atualizar apenas o preco, o novo valor deve ser salvo. O retorno deve ser true.', () => {

    // cenário
    const mercado = new Mercadinho();
    const prod = new Produto(4, 'Café', 12, 2);

    mercado.adicionarProduto(prod);
    // ------------------

    // execução
    const resultado = mercado.atualizarProduto(4, { preco: 15 });
    // ------------------

    // verificação
    expect(resultado).toBe(true);
    const atualizado = mercado.buscarProduto(4);
    expect(atualizado.preco).toBe(15);
    expect(atualizado.nome).toBe('Café');
    expect(atualizado.quantidade).toBe(2);
    // ------------------
  });

});
