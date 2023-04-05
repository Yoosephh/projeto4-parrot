const parrotImgs = [
    "./img/bobrossparrot.gif",
    "./img/explodyparrot.gif",
    "./img/fiestaparrot.gif",
    "./img/metalparrot.gif",
    "./img/revertitparrot.gif",
    "./img/tripletsparrot.gif",
    "./img/unicornparrot.gif" 
]
let quantasCartas

verificaQuantidadeCartas(quantasCartas);
function verificaQuantidadeCartas() {
    quantasCartas = prompt('Insira com quantas cartas vc quer jogar (entre 4 e 14)');
    while (quantasCartas < 4 || quantasCartas%2 == 1 || quantasCartas > 14) {
        quantasCartas = prompt('O numero precisa estar entre 4 e 14 e ser um numero par!');
    }
    if (quantasCartas >= 4 && quantasCartas%2 == 0 && quantasCartas <= 14) {
        vamosJogar(quantasCartas);
    }
}

function vamosJogar(qtdeCartas) {
    const cartasEmbaralhadas = parrotImgs.concat(parrotImgs).sort(() => 0.5 - Math.random());
    const containerCartas = document.querySelector('.card-containers');
    let cartasUsadas = [];

    for (let i = 0; i < qtdeCartas / 2; i++) {
        let cartaImg = cartasEmbaralhadas[Math.floor(Math.random() * cartasEmbaralhadas.length)];
        while (cartasUsadas.includes(cartaImg)) {
            cartaImg = cartasEmbaralhadas[Math.floor(Math.random() * cartasEmbaralhadas.length)];
        }
        containerCartas.innerHTML += `
            <div class="card">
                <div class=\"front-face face">
                    <img src="${cartaImg}" alt="bobros-${i}">
                </div>
                <div class="back-face face">
                    <img src="./img/back.png" alt="verso-card">
                </div>
            </div>
            <div class="card">
                <div class=\"front-face face">
                    <img src="${cartaImg}" alt="bobros-${i}">
                </div>
                <div class="back-face face">
                    <img src="./img/back.png" alt="verso-card">
                </div>
            </div>
        `;
        cartasUsadas.push(cartaImg);
    }
}




/*

let mixCards = [];
let cards = parrotImgs.slice();
for (let i = cards.length -1; i>0; i--) {
    const r = Math.floor(Math.random()*(i+1));
    [cards[i], cards[r]] = [cards[r], cards[i]]
}
mixCards = cards;

let firstCard, secondCard;
let qntdPartidas = 0;
let tentativas = 0;
*/
