// nome da função: Verbo + substantivo

let corSite = "azul";

function resetaCor(){
    corSite = ""; 
};

console.log(corSite);
resetaCor();
console.log(corSite);

//tipos de funções 
// 1- realiza tarefa e n devolve nada
function dizerNome(){
    console.log('Lucas');

}
dizerNome();

// 2- devolve com o return

function multiplicaPorDois(valor){      //passa o valor de referência
    return valor*2;
}

console.log(multiplicaPorDois(5));

let resultado = multiplicaPorDois(5);

console.log(resultado);


