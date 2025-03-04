// Faça um programa que leia um número inteiro e calcule o seu fatorial.


var num, fat;
window.alert("Calcule o fatorial de um número");
num = parseInt(prompt("Informe o número: "));

if (isNaN(num) || num < 0) {
    alert("Só é permitido inteiro positivo");
} else {
    fat = 1;
    for(let i = 1; i <= num; i++) {
        fat = fat * i;
    }
    alert("O fatorial é: " + fat);
}





