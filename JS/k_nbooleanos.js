// Comparação não booleanos

//Falsy: undefined, null, o, false, '', NaN - not a number

//Truthy: os outros

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPersonalizada

console.log(corPerfil); //Vermelho

