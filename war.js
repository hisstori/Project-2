console.log("Welcome to War!");

function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.face = rank + ' of ' + suit;
};

suits = ["spades", "clubs", "hearts", "diamonds"]
ranks = "A23456789TJQK"
deck = new Deck(suits.length * ranks.length)

function buildDeck() {
for (i = 0; i < suits.length; i++) {
    for (j = 0; ranks.length; j++)
    deck[j + i * ranks.length] = new Card(ranks[j],suits[i])
    }
    return deck;
};