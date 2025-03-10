// #region codigo antigo 
/*
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
*/
//#endregion



//#region codigo de 10/03/2025 --atulizado

const buttonMain = document.getElementById('buttonMain');

buttonMain.addEventListener('click', () =>{
    const randon_array = [
        "<img src='img/frases/frase-1.png'>",
        "<img src='img/frases/frase-2.png'>",
        "<img src='img/frases/frase-3.png'>"
    ]
    
    const randon_value = Math.floor(Math.random() * randon_array.length)
    document.getElementById("imgFrases").innerHTML = randon_array[randon_value];

})



//#endregion
