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
let quantosCliques = 0;
verificaQuantidadeCartas(quantasCartas);
function verificaQuantidadeCartas() {
    quantasCartas = prompt('Insira com quantas cartas vc quer jogar (entre 4 e 14)');
    while (isNaN(quantasCartas) || quantasCartas < 4 || quantasCartas%2 == 1 || quantasCartas > 14) {
        if(quantasCartas<4) {
            quantasCartas= prompt('O numero precisa ser maior ou igual a 4!')
        } else if (quantasCartas%2 == 1) {
            quantasCartas= prompt('O numero precisa ser par!')
        } else if (quantasCartas > 14) {
            quantasCartas= prompt('O numero precisa ser menor ou igual a 14!')
        } else if (isNaN(quantasCartas)) {
            quantasCartas = prompt('Por favor, digite um número');
        }
    }
    if (quantasCartas >= 4 && quantasCartas%2 == 0 && quantasCartas <= 14) {
        vamosJogar(quantasCartas);
    }
}

function vamosJogar(qtdeCartas) {
    const cartasEmbaralhadas = parrotImgs.sort(() => 0.5 - Math.random());
    const containerCartas = document.querySelector('.card-containers');
    const cartasUsadas = [];

    for (let i = 0; i < qtdeCartas / 2; i++) {
        let cartaImg = cartasEmbaralhadas[Math.floor(Math.random() * cartasEmbaralhadas.length)];
        while (cartasUsadas.includes(cartaImg)) {
            cartaImg = cartasEmbaralhadas[Math.floor(Math.random() * cartasEmbaralhadas.length)];
        }
        cartasUsadas.push(cartaImg); 
    }
    const sortCards = cartasUsadas.concat(cartasUsadas).sort(() => 0.5 - Math.random())
    sortCards.forEach((cardImg, i)=> {
        const cardElement = 
    `<div class="card" data-img="${cardImg} data-test="card"">
        <div class="back-face face">
            <img src="./img/back.png" alt="verso-card" data-test="face-down-image">
        </div>
        <div class="front-face face">
            <img src="${cardImg}" alt="${i}" data-test="face-up-image">
        </div>
    </div>`
        containerCartas.innerHTML += cardElement
    });
}
const cartinha = document.querySelectorAll('.card');
let cartaAtiva = false;
let primeiraCarta, segundaCarta;
let boardLocker = false;

function activeCard() {
    if (boardLocker) return;
    if (this === primeiraCarta) return;
    
    this.classList.add('active');
    quantosCliques ++
    if(!cartaAtiva){ // primeiro clique
        cartaAtiva = true;
        primeiraCarta = this;
        return;
    }      //segundo clique

    cartaAtiva = false;
    segundaCarta = this;

    eIgualOuNao();
}
let paresFeitos
function eIgualOuNao() {
    if(primeiraCarta.dataset.img == segundaCarta.dataset.img) {
        clearCards();
        paresFeitos++;
    } else {
       resetCards();
    }
    const todasAsCartas = document.querySelectorAll('.card');
    const todasAsCartasAtivas = document.querySelectorAll('.card.active');
   setTimeout(() => {
    if (todasAsCartas.length === todasAsCartasAtivas.length) {
        alert(`Você ganhou o jogo em ${quantosCliques} jogadas!`);
    }
   }, 700); 
}
function clearCards() {
    primeiraCarta.removeEventListener('click', activeCard);
    segundaCarta.removeEventListener('click', activeCard);
    resetBoard();
}
function resetCards() {
    boardLocker = true;
    setTimeout(() => {
        primeiraCarta.classList.remove('active');
        segundaCarta.classList.remove('active');
        resetBoard();
        }, 1000);
}
function resetBoard() {
    [cartaAtiva, boardLocker] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null]
}
cartinha.forEach(carta => carta.addEventListener('click', activeCard))



