// Escreva um programa que receba a idade e a altura de várias pessoas, calcule e apresente a média de altura e idade das pessoas. O programa deve ser encerrado mediante solicitação do usuário, momento em que as médias serão apresentadas.
function soNumeros(entradaIdade){
    while(isNaN(entradaIdade)){
        alert("Só é permitido número");
        entradaIdade = parseInt(window.prompt("Informe a idade:"));
    }
    return entradaIdade;
}
function soNumerosAltura(entradaAltura){
    while(isNaN(entradaAltura)){
        alert("Só é permitido número");
        entradaAltura = parseFloat(window.prompt("Informe a altura em cm:"));
    }
    return entradaAltura;
}

function mediaIdadeAltura(){
    var altura = 0;
    var numPessoas = 0;
    var idade = 0;
    var contadorIdade = 0;
    var contadorAltura = 0;
    var mediaAltura = 0;
    var mediaIdade = 0;
    var terminar= confirm("Se quiser continuar (clique ok) \nCaso contrário (clique cancelar)");
    if(terminar == false){
        return 0;
    }
    while(terminar != false){
        idade = parseInt(window.prompt("Informe a idade:"));
        idade = soNumeros(idade);
        contadorIdade += idade;
        altura = parseFloat(window.prompt("Informe a altura em cm:"));
        altura = soNumerosAltura(altura);
        contadorAltura += altura;
        numPessoas++;
        terminar= confirm("Se quiser continuar (clique ok) \nCaso contrário (clique cancelar)");
    }

    mediaAltura =  contadorAltura/numPessoas; 
    mediaIdade = contadorIdade/numPessoas; 
    var reducaoAltura = mediaAltura.toFixed(1);
    var reducaoIdade = mediaIdade.toFixed(1);
    if(mediaAltura < 0 || mediaIdade < 0){
        window.alert('Algo deu errado, tente novamente');
    }else{
        window.alert(`Quantidade de Pessoas ${numPessoas} \n----------------------------------\nA média de altura é: ${reducaoAltura} \nA média de idade é: ${reducaoIdade}`);
    }
}

window.alert("--IDADE E ALTURA--👨‍👨‍👦‍👦 \nDigite a idade e altura para cada pessoa, no fim receba a média de cada valor. ");
mediaIdadeAltura();