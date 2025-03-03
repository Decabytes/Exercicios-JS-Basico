// O problema consiste em auxiliar um professor no fechamento das notas de uma turma. Para tanto, deve ser construído um programa que pergunte a qtde de alunos, a nota máxima permitida na prova, bem como, o nome do aluno seguido da nota que obteve, no final deve ser exibido todas as notas de cada aluno com a informação de quem foi aprovado ou não. Para ser aprovado, o estudante precisa obter uma nota igual ou maior que 6. O programa é encerrado quando atinge o último aluno que fez a prova.

var confirmacaoUsuario = confirm("Deseja iniciar o programa?");
if (confirmacaoUsuario) {
  analiseNotas();
}

function soNumerosNota(digitevalor) {
  while (isNaN(digitevalor)) {
    alert("Só é permitido número");
    digitevalor = parseInt(prompt("Informe a nota obtida pelo aluno"));
  }
  return digitevalor;
}
function soNumerosQtdeAlunos(digitevalor) {
  while (isNaN(digitevalor)) {
    alert("Só é permitido número");
    digitevalor = parseInt(
      prompt("Informe a quantidade de alunos que fizeram a prova")
    );
  }
  return digitevalor;
}
function soNumerosPontuacaoProva(digitevalor) {
  while (isNaN(digitevalor)) {
    alert("Só é permitido número");
    digitevalor = parseInt(prompt("Informe o máximo de pontuação da prova"));
  }
  return digitevalor;
}

function analiseNotas() {
  var cod_aluno = 0;
  var alunoQfizeramProva = 0;
  var notaMaximaPossivel = 0;
  var aprovados = 0;
  var reprovados = 0;
  alunoQfizeramProva = parseInt(
    prompt("Informe a quantidade de alunos que fizeram a prova")
  );
  alunoQfizeramProva = soNumerosQtdeAlunos(alunoQfizeramProva);

  notaMaximaPossivel = parseInt(
    prompt("Informe o máximo de pontuação que a prova tem")
  );
  notaMaximaPossivel = soNumerosPontuacaoProva(notaMaximaPossivel);
  for (let i = 1; i <= alunoQfizeramProva; i++) {
    cod_aluno = prompt("Informe o 'código ou nome' do aluno " + i);
    console.log("Aluno(a) " + cod_aluno);
    let notaAluno = parseInt(prompt("Informe a nota obtida por esse aluno"));
    notaAluno = soNumerosNota(notaAluno);

    while (notaAluno > notaMaximaPossivel || isNaN(notaMaximaPossivel)) {
      alert("Valor maior que o permitido");
      alert("Digite a nota novamente");
      notaAluno = parseInt(prompt("Informe a nota obtida por esse aluno"));
    }

  while (notaAluno < 0 || isNaN(notaAluno)) {
    alert("Não é permitido valores menor do que 0");
    alert("Digite a nota novamente");
    notaAluno = parseInt(prompt("Informe a nota obtida por esse aluno"));
    }
  console.log("A nota foi " + notaAluno);
  if (notaAluno >= 6) {
    console.log("Aprovado");
    aprovados++;
  } else {
    console.log("Reprovado");
    reprovados++;
  }
  console.log("---------------------");
}
console.log("Quantidade de aprovados: " + aprovados);
console.log("Quantidade de reprovados: " + reprovados);
alert("Vá no console para visualizar as notas");
}
