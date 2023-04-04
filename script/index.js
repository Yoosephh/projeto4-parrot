const parrotImgs = [
    "image1.gif",
    "image2.gif",
    "image3.gif",
    "image4.gif",
    "image5.gif",
    "image6.gif",
    "image7.gif",
    "image8.gif",
    "image9.gif",
    "image10.gif",
    "image11.gif",
    "image12.gif",
    "image13.gif",
    "image14.gif"
];
let mixCards = [];
let cards = parrotImgs.slice();
for (let i = cards.length -1; i>0; i--) {
    const r = Math.floor(Math.random()*(i+1));
    [cards[i], cards[j]] = [cards[j], cards[i]]
}
mixCards = cards;

let firstCard, secondCard;
let qntdPartidas = 0;
let tentativas = 0;

