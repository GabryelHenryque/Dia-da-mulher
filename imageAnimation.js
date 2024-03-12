console.log("ola mundo");

// Pega o botão e faz algo ao clicar
let buttonMainn = document.getElementById("buttonMain"); // Correção: use # para selecionar por ID
buttonMainn.addEventListener("click", randonNumber);

let value = 0;

function randonNumber(){
    if(value < 3) {
        value = Math.floor(Math.random() * 3);
        value = Math.floor(Math.random() * 3);
    }

    let number = "";
    switch(value) {
        case 0:
            number = "<img src='img/frases/frase-1.png'>";
            break;
        case 1:
            number = "<img src='img/frases/frase-2.png'>";
            break;
        case 2:
            number = "<img src='img/frases/frase-3.png'>";
            break;
    }
    
    document.getElementById("imgFrases").innerHTML = number;
    
}


//formula
//let numeroAleatorio = Math.floor(Math.random() * 100);

//enviar imagem
