//para propriedades de um objeto ou elementos de um array
//for-in

const pessoa= {
    nome: "Laravel",
    idade: 26
};

//key-value
for(let chave in pessoa){
    console.log(chave, pessoa.nome);
}

const cores = ['vermelho','azul','verde'];

// for (let indice in cores){
//     console.log(indice,cores[indice])
// }

//for-of

for(let cor of cores){  //iterar
    console.log(cor);
}