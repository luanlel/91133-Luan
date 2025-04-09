document.getElementById("cadProd").addEventListener("submit", function(event){
    event.preventDefault() // Impede o envio do formulário
   


});

function salvarProduto(){
    let nome = document.getElementById('nome').value;
    let preco = document.getElementById('preco').value;
    let quantidade = document.getElementById('quantidade').value;
    
    // Validação dos Campos
    if (!nome || !preco || !quantidade) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    if (isNaN(preco) || isNaN(quantidade)) {
        alert("Preço e quantidade devem ser números.");
        return;
    }
    
    
    localStorage.setItem("nome", nome);
    localStorage.setItem("preco", preco);
    localStorage.setItem("quantidade", quantidade);
    
    alert("Produto salvo com sucesso!");
}

function calcular() {
    
    let preco = parseFloat(document.getElementById('preco').value) || 0; // Se estiver vazio, considera 0
    let quantidade = parseInt(document.getElementById('quantidade').value) || 0; // Se estiver vazio, considera 0
    
        
    let total = preco * quantidade;   
    document.getElementById('total').innerText = 'Total: R$ ' + total.toFixed(2);
    }
    
    calcular();