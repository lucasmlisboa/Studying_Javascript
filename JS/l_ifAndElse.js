//If.. else
// se a hora estiver: 06-12 : Bom dia!
// hora: 12-18: Boa tarde!
// sen: Boa noite!

var today = new Date(); 
let hora = today.getHours();


if (hora>= 6 && hora <= 12){
    document.getElementById("cortesia").innerHTML= "Bom dia!";
}
    else if(hora > 12 && hora <= 18){
        document.getElementById("cortesia").innerHTML= "Boa tarde!";
    }
        else{
            document.getElementById("cortesia").innerHTML= "Boa noite!";
        }