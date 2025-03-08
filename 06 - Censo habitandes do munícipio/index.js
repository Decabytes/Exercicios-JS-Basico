// A prefeitura de uma cidade está coletando informações sobre o salário e o número de filhos dos habitantes. Deve haver um mecânismo que permita com que a leitura de dados ocorra até o usuário solicitar parar. Apresente a média de salário da população, a média de filhos e o maior salário.

function analiseDSalario(salariolocal, maiorSalariolocal){
    if(salariolocal > maiorSalariolocal){
        maiorSalariolocal = salariolocal;
    }
    return maiorSalariolocal;
}

function soNumeros(varlocal, habitante){
    while(varlocal < 0 || isNaN(varlocal)){
        alert("Só é permitido número");
        varlocal = parseInt(prompt(`Quantos filhos o habitante ${habitante} tem?`));
    }
    return varlocal;
}
function soNumerosSalario(varlocal, habitante){
    while(varlocal < 0 || isNaN(varlocal)){
        alert("Só é permitido número");
        varlocal = parseInt(prompt(`Qual o salário da família do habitante ${habitante}?`));
    }
    return varlocal;
}

function filhoDHabitantes(){
    var maiorSalario = 0;
    var salario = 0;
    var salarioTotal = 0;
    var numFilhos = 0;
    var mediaSalario = 0;
    var mediaFilhos = 0;
    var habitante = 0;
    var ultimaconfirmacao = true;
    var confirmacao = confirm("Deseja continuar? \n-------------\n- Clique em (OK) para continuar \n- Clique em (Cancelar) para sair");

    while(confirmacao){
        habitante++;
        numFilhos += parseInt(prompt(`Quantos filhos o habitante ${habitante} tem?`));
        numFilhos = soNumeros(numFilhos, habitante);
        salario = parseInt(prompt(`Qual o salário da família do habitante ${habitante}?`));
        salario = soNumerosSalario(salario, habitante);
        salarioTotal += salario;
        maiorSalario = analiseDSalario(salario, maiorSalario);
        
        confirmacao = confirm("Deseja continuar? \n-------------\n- Clique em (OK) para continuar adicionando 🔵\n- Clique em (Cancelar) para ver resultados 🔴");
        ultimaconfirmacao = confirmacao;
    }
    mediaSalario = salarioTotal / habitante;
    var limitacaoMediaSalario = mediaSalario.toFixed(1);
    mediaFilhos = numFilhos / habitante;
    var limitacaomediaFilhos = mediaFilhos.toFixed(1);
    if(ultimaconfirmacao){
        return 0;
    }else{
        window.alert(`Pessoas entrevistadas: ${habitante} \n----------------------\nMédia de salário da população: ${limitacaoMediaSalario}\nMédia de filhos: ${limitacaomediaFilhos}\nO maior salário visto: ${maiorSalario}`);
    }

}

alert("Programa para calcular: \n ----------------------------- \n - Média de salário da população \n - Média de filhos \n - Maior salário");

filhoDHabitantes();