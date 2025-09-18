// teste de atualização de produto inexistente; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Atualização de produto inexistente', () => {
  it('Deve retornar false ao tentar atualizar produto que não existe', () => {

    // cenário
    const mercado = new Mercadinho();
    // ------------------

    // execução
    const resultado = mercado.atualizarProduto(99, { nome: 'Novo' });
    // ------------------

    // verificação
    expect(resultado).toBe(false);
    // ------------------
  });
  
});