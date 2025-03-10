// Crie uma função que receba o peso em quilos e o converta em gramas

function conversorPeso(){
    var kg = prompt("Digite o peso em kg");
    if(isNaN(kg)|| kg < 0){
        alert("Digite um valor válido");

    }else{
        var gramas = kg * 1000;
        window.alert(`${kg}kg em gramas é ${gramas}g.`);
    }
}

window.alert("Conversor peso de kg para gramas ");

conversorPeso();

