//controle entrada
let totalCartas = parseInt(prompt("Digite um numero de cartas valido: numero par, de 4 até 14"));

while ((totalCartas%2) !== 0 || (totalCartas > 14) || (totalCartas < 4)) {
    totalCartas = parseInt(prompt("Digite um numero de cartas valido: (numero par, de 4 até 14)"))
}

//lista de imagens
let imagem = [
    "<img class ='desaparecer' src='img/bobrossparrot.gif' alt=''>",
    "<img class ='desaparecer' src='img/explodyparrot.gif' alt=''>",
    "<img class ='desaparecer' src='img/fiestaparrot.gif' alt=''>",
    "<img class ='desaparecer' src='img/metalparrot.gif' alt=''>",
    "<img class ='desaparecer' src='img/tripletsparrot.gif' alt=''>",
    "<img class ='desaparecer' src='img/unicornparrot.gif' alt=''>",
    "<img class ='desaparecer' src='img/revertitparrot.gif' alt=''>"
]

//criando cards dentro de uma lista
let cardsLista=[];

for(let i = 0; i <=((totalCartas/2)-1); i++ ){
    
    cardsLista.push(`
            <li class='card'>
                <div class='frente-card'>
                    <img src='img/front.png' alt=''>
                </div>
                
                <div class='fundo-card'>
                    ${imagem[i]}
                </div>
            </li>`)
           
            cardsLista.push(`
            <li class='card'>
                <div class='frente-card'>
                    <img src='img/front.png' alt=''>
                </div>
                
                <div class='fundo-card'>
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



