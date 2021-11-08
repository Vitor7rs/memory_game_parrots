//controle entrada
let totalCartas = parseInt(prompt("Digite um numero de cartas valido: numero par, de 4 até 14"));

while ((totalCartas%2) !== 0 || (totalCartas > 14) || (totalCartas < 4)) {
    totalCartas = parseInt(prompt("Digite um numero de cartas valido: (numero par, de 4 até 14)"))
}

//lista de imagens
let imagem = [
    "<img  src='img/bobrossparrot.gif' alt=''>",
    "<img  src='img/explodyparrot.gif' alt=''>",
    "<img  src='img/fiestaparrot.gif' alt=''>",
    "<img  src='img/metalparrot.gif' alt=''>",
    "<img  src='img/tripletsparrot.gif' alt=''>",
    "<img  src='img/unicornparrot.gif' alt=''>",
    "<img  src='img/revertitparrot.gif' alt=''>"
]

//criando cards dentro de uma lista
let cardsLista=[];

for(let i = 0; i <=((totalCartas/2)-1); i++ ){
    
    cardsLista.push(`
        <li class='card' onclick="turno(this)" data-identifier="card">
            <div class='frente-card' data-identifier="front-face">
                <img src='img/front.png' alt=''>
            </div>      
            <div class='img desaparecer' data-identifier="back-face">
                ${imagem[i]}
            </div>
        </li>`)
           
    cardsLista.push(`
        <li class='card' onclick="turno(this)" data-identifier="card">
            <div class='frente-card' data-identifier="front-face">
                <img src='img/front.png' alt=''>
            </div>
                
            <div class='img desaparecer' data-identifier="back-face">
                ${imagem[i]}
            </div>
        </li>`)
}

//embaralhando lista
function embaralhador() { 
	return Math.random() - 0.5; 
}
cardsLista.sort(embaralhador);

//colocando lista embaralhada na tela
for (let i = 0; i < cardsLista.length; i++) {
    let cards = document.querySelector(".area-cartas");
    cards.innerHTML += `${cardsLista[i]}`;
}

// VERIFICANDO AS JOGADAS E SALVANDO CARTAS SELECIONADAS
 let jogadas = 0;
 let cartaVirada = [];
 let fimDeJogo=0;

 function turno(carta){
    jogadas+=1;
    const frente = carta.children[0];
    frente.classList.add('desaparecer');

    const atras = carta.children[1];
    atras.classList.remove('desaparecer');

    cartaVirada.push(atras);

    if(cartaVirada.length===2){

        verificar(cartaVirada[0], cartaVirada[1]);
        cartaVirada=[]
    }
 }

 // verificar se as cartas são iguais e chamar a funçao que vira ela, caso nesessário
function verificar(carta1, carta2){
    let frente1 = carta1.innerHTML;
    let frente2= carta2.innerHTML;
    
    if(frente1 === frente2){
        carta1.removeAttribute('onclick');
        carta2.removeAttribute('onclick');
        console.log(carta1, carta2);
        fimDeJogo+=2;
        setTimeout(vitoria, 1000);
    }
    else {setTimeout(virar, 1000, carta1, carta2)
        
        
    
    }
}

// vira as cartas, caso nao tenham dado match
function virar(carta1, carta2){
    carta1.parentNode.children[0].classList.remove('desaparecer');
    carta1.parentNode.children[1].classList.add('desaparecer');
    carta2.parentNode.children[0].classList.remove('desaparecer');
    carta2.parentNode.children[1].classList.add('desaparecer');
}

// verifica o fim de jogo
function vitoria(){
    if(fimDeJogo === totalCartas){
        alert("Você venceu em " + jogadas + " jogadas");
    }
}