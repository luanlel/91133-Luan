// Título: Classe de produto e mercadinho
// Autor: Luan de Lima
// Data: 18/09/2025

class Produto {
  constructor(id, nome, preco, quantidade) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

class Mercadinho {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    if (this.produtos.some(p => p.id === produto.id)) {
      return false;
    }
    this.produtos.push(produto);
    return true;
  }

  buscarProduto(id) {
    return this.produtos.find(p => p.id === id) || null;
  }

  atualizarProduto(id, novosDados) {
    const produto = this.buscarProduto(id);
    if (!produto) return false;
    produto.nome = novosDados.nome ?? produto.nome;
    produto.preco = novosDados.preco ?? produto.preco;
    produto.quantidade = novosDados.quantidade ?? produto.quantidade;
    return true;
  }

  removerProduto(id) {
    const tamanhoInicial = this.produtos.length;
    this.produtos = this.produtos.filter(p => p.id !== id);
    return this.produtos.length < tamanhoInicial;
  }

  listarProdutos() {
    return this.produtos;
  }

  limpar() {
    this.produtos = [];
  }
}

module.exports = {
    Produto,
    Mercadinho 
};