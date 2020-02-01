console.log("Welcome to War!");

const suits = ["spades", "clubs", "hearts", "diamonds"]
const ranks = "A23456789TJQK"
const deck = new Array(ranks.length * suits.length)
const playerOneDeck = []
const playerTwoDeck = []

let splitDeck = Math.ceil(deck.length / 2)

function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.face = rank + ' of ' + suit;
};

function buildDeck() {
    for (i = 0; i < suits.length; i++) {
        for (j = 0;j < ranks.length; j++)
        deck[j + i * ranks.length] = new Card(ranks[j],suits[i])
    }
    console.log("Prepare for War!")
    return deck;      
};

function shuffle(deck) {
    let m = deck.length, t, i;

    while(m) {
        i = Math.floor(Math.random() * m--);

        t = deck[m];
        deck[m] = deck[i];
        deck[i] = t;
    }
    return deck;
};
// function cardsDealt() {
//     if (playerOneDeck.length < 0; 
// }

