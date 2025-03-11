//Faça um algoritmo que pergunte a quantidade de reais e a cotação atual, para que a conversão de real para dólar seja feita.
function soNumerosCotacao(variaLocal){
    while(isNaN(variaLocal)|| variaLocal < 0){
        alert("Digite somente número");
        variaLocal = parseFloat(prompt("Um dólar custa quantos reais?"));
    }

    return variaLocal;
}

function conversaoMoedas(){
  var reais = parseFloat(window.prompt("Insira a quantidade de reais: "));
  var cotacao = parseFloat(window.prompt("Um dólar custa quantos reais?"));
  cotacao = soNumerosCotacao(cotacao);
  var converte =  reais / cotacao;
  var duascasas = converte.toFixed(2);
  if (isNaN(duascasas) || duascasas< 0){
    window.alert('Digite valores válidos ❌')
  }else{
    window.alert(`Você tem ${duascasas} dólares 🤑`);
  }
}

window.alert("Conversão de Real para Dólar 💲");
conversaoMoedas();