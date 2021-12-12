let canvas = document.getElementById ("cobrinha");
let context = canvas.getContext("2d"); /**/ 
let box = 32; /*32 pixels cada quadrado*/
let cobrinha = [];
cobrinha[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG(){
   context.fillStyle = "lightgreen"; /*Estilo do Canvas*/ 
    context.fillRect(0, 0, 16 * box, 16 * box);/*Desenhar onde vai acontecer o jogo*/ 
}


function criarCobrinha(){
    for(i=0; i < cobrinha.length; i++){
        context.fillStyle = "red";
        context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBR(); 
    criarCobrinha();

    let cobrinhaX = cobrinha[0].x;
    let cobrinhaY = cobrinha[0].y;

    if(direction == "right") cobrinhaX += box; 
    if(direction == "left") cobrinhaX -= box;
    if(direction == "up") cobrinhaY -= box;
    if(direction == "down") cobrinhaY += box;

    cobrinha.pop();

    let newHead = {
        x: cobrinhaX,
        y: cobrinhaY        
    }
    cobrinha.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); /*Intervalo do jogo */


