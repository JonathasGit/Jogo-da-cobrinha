let canvas = document.getElementById ("cobrinha");
let context = canvas.getContext("2d"); /**/ 
let box = 32; /*32 pixels cada quadrado*/
let cobrinha = [];
cobrinha[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
   context.fillStyle = "lightgreen"; /*Estilo do Canvas*/ 
    context.fillRect(0, 0, 16 * box, 16 * box);/*Desenhar onde vai acontecer o jogo*/ 
}


function criarCobrinha(){
    for(i=0; < cobrinha.length; i++){
        context.fillStyle = "red";
        context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
    }
}


criarBR(); 
criarCobrinha();