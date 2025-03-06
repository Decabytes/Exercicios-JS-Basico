// Construa um programa que receba um número inteiro maior que um e verifique se ele é primo.
function soNumeros(numLocal){
      while(isNaN(numLocal) || numLocal < 0){
          alert("Só é permitido número positivo");
          numLocal = parseInt(window.prompt("Insira um número e veja se ele é primo:"));
      }
      return numLocal;
  }

function main(){
    var num, i, qtdade;
    num = prompt("Insira um número e veja se ele é primo:");
    num = soNumeros(num);
    qtdade = 0;
    for (i=1; i<=num; i++)
    {
         if (num % i == 0)
            qtdade ++;
    }
    if (qtdade == 2)
          alert(`O número ${num} é primo ✔`)
    else
          alert(`O número ${num} não é primo❌`)
}

main();