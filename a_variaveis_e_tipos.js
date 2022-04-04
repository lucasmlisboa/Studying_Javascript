//RESUMO: Variáveis e tipos

// O que é uma variável?
// Uma variável é um container para um valor, como um número que podemos usar em uma operação de adição, ou uma sequência de texto que possamos usar como parte de uma oração. Mas uma coisa especial a respeito das variáveis é que seu conteúdo pode mudar. Vamos ver um exemplo simples:

var meuNome = 'Lucas';
var minhaIdade = 26;

// Nota: No JavaScript, todas as intruções em código deve terminar com um ponto e vírgula (;) — seu código pode até funcionar sem o ponto e vírgula em linhas únicas, mas provavelmente não irá funcionar quando estiver escrevendo várias linhas de código juntas. Tente pegar o hábito de sempre incluir o ponto e vírgula.

// let: Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.

let peso = 75;
console.log(peso); //Exibe uma mensagem na console do navegador.

let altura = 170;
console.log(altura);

// O objeto Boolean é um objeto wrapper para um valor booleano.
let aprovado= true; 

//
let corSelecionado = null; //redefinir valor

// OBS: javasCript é camelcase :. *CamelCase é a denominação em inglês para a prática de escrever as palavras compostas ou frases, onde cada palavra é iniciada com maiúsculas e unidas sem espaços. ex: corSelecionado

// Constantes
// A declaração const cria uma referência somente leitura a um valor. Isso não significa que esse valor é imutável, apenas que o identificador da variável constante não pode ser alterado. Se o conteúdo do identificador for um objeto, isso significa que o conteúdo do objeto (ex. seus parâmetros) podem ser alterados.

 const corCabelo = 'loiro';

//OBS: no mercado de trabalho usam-se mais o let e const

