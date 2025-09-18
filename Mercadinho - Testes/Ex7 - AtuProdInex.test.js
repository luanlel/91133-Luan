// teste de atualização de produto inexistente; Luan de Lima; 18/09/2025

const { Produto, Mercadinho } = require('./Mercadinho');

describe('Atualização de produto inexistente', () => {
  it('Ao tentar atualizar um produto que não existe, o método deve retornar false.', () => {

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
