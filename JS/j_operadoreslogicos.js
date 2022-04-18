//Operador lógico e (&&)
// Retorna TRUE se 2 operandos foram TRUE

console.log(false && true);

//exemplço real
let maiorDeIdade = false;
let possuiCarteiradeTrabalho =  true;
let podeAplicar = maiorDeIdade && possuiCarteiradeTrabalho;



//Operador lógico: ou (||)
// retorna true se um dos compenentes forem true

let podeAplicar2 = maiorDeIdade || possuiCarteiradeTrabalho; 
console.log(podeAplicar2);

//Operador NOT(!)
let candidatoRecusado = !podeAplicar;

console.log('Candidato recusado', candidatoRecusado);
console.log(podeAplicar);


