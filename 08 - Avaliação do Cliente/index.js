// Em uma avaliação de um produto, o cliente responde sua opinião (1 – satisfatório; 2 –
// indiferente; 3 – insatisfatório). Faça um programa que leia idade e opinião e apresente:
// o número de clientes que responderam satisfatório, a média de idade dos clientes que
// opinaram como satisfatório, e o número de clientes que responderam insatisfatório também mostrando a média.
// O programa se encerra quando o usuário solicitar.




function soNumeros(digitevalor) {
    while (isNaN(digitevalor)) {
      alert("Só é permitido número");
      digitevalor = parseInt(prompt("Insira a quantidade de clientes 👨‍👨‍👦‍👦"));
    }
    return digitevalor;
  }


alert("Avaliação do produto X 🎯")
var qtde_Clientes = prompt("Insira a quantidade de clientes 👨‍👨‍👦‍👦");
qtde_Clientes = soNumeros(qtde_Clientes);
var satisfatorio = 0;
var indiferente = 0;
var insatisfatorio = 0;
var somaIdadeSats = 0,somaIdadeInsatis = 0,somaIdadeIndi = 0;
var mediaIdadeSats = 0,mediaIdadeInsats = 0, mediaIdadeIndi = 0;
for(let i = 1; i <= qtde_Clientes; i++){
    var idade = parseInt(prompt(`Insira a idade do cliente ${i} 🎂: `));
    while (isNaN(idade)) {
        alert("Só é permitido número");
        idade = parseInt(prompt(`Insira a idade do cliente ${i} 🎂: `));
      }
    var avaliacao = parseInt(prompt(`Digite a opinião do cliente ${i} sobre o  produto 📌: \n\n 1️⃣ satisfatório \n 2️⃣ indiferente \n 3️⃣ insatisfatório`));
    while (isNaN(avaliacao) || avaliacao < 1 || avaliacao > 3){
        alert("Só é permitido valor entre 1 à 3");
        avaliacao = parseInt(prompt(`Digite a opinião do cliente ${i} sobre o  produto 📌: \n\n 1️⃣ satisfatório \n 2️⃣ indiferente \n 3️⃣ insatisfatório `));
      }

    switch(avaliacao){
        case 1 :
            satisfatorio++;
            somaIdadeSats += idade;
            break;
        case 2 :
            indiferente++
            somaIdadeIndi += idade;
            break;
        case 3 :
            insatisfatorio++;
            somaIdadeInsatis += idade;
            break;
    }
}


mediaIdadeSats = somaIdadeSats / satisfatorio;
var mediaIdadeSatsFormatado = mediaIdadeSats.toFixed(1);
mediaIdadeIndi = somaIdadeIndi / indiferente;
var mediaIdadeIndiFormatado = mediaIdadeIndi.toFixed(1);
mediaIdadeInsats =  somaIdadeInsatis / insatisfatorio;
var mediaIdadeInsatsFormatado = mediaIdadeInsats.toFixed(1);

if(isNaN(mediaIdadeSatsFormatado)){
  mediaIdadeSatsFormatado = 0;
}
if(isNaN(mediaIdadeIndiFormatado)){
  mediaIdadeIndiFormatado = 0;
}
if(isNaN(mediaIdadeInsatsFormatado)){
  mediaIdadeInsatsFormatado = 0;
}

window.alert("Vá no console para visualizar os resultados 💁‍♀️")


console.log(`Número de votos ${qtde_Clientes}`);
console.log(`---------------------------------------`);      
console.log(`Qtde clientes satisfeitos ${satisfatorio}`);
console.log(`Média de idade dos que votaram ${mediaIdadeSatsFormatado}`);                
console.log(`---------------------------------------`);                
console.log(`Qtde clientes indiferentes ${indiferente}`);
console.log(`Média de idade dos que votaram ${mediaIdadeIndiFormatado}`);
console.log(`---------------------------------------`);      
console.log(`Qtde clientes insatisfeitos ${insatisfatorio}`);
console.log(`Média de idade dos que votaram ${mediaIdadeInsatsFormatado}`);
console.log(`---------------------------------------`);      

