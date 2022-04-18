//função que lê 2 números e retorna o maior deles

let n1 = prompt("Digite um número: ");
let n2 = prompt("Digite outro número: ");

function maiorNum(n1,n2){
    if(n1>n2){
        alert(n1, ' é maior');
    }
    else if(n2<n1){
        alert(n2, ' é maior');
    }
    else if(n1=n2){
        alert("Eles são iguais");
    }
}

maiorNum();
