//Start of Logic
class Card {
	constructor(suit, rank, score) {
	this.suit = ['hearts', 'spades', 'clubs', 'diamonds']
	this.rank = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
	this.score = (14, 1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 12, 13)
}
};

class Deck {
   constructor(length, cards) {
	   suits = ['hearts', 'spades', 'clubs', 'diamonds']
	   ranks = [1,2,3,4,5,6,7,8,9,10,'J','Q','K','A',]
   this.length = length
	   for (i = 0; i < suit.length; i++) {
		   console.log("Game Created")
		   for (j = 0; j < rank.length; j++) 
		   Deck[i+ j * rank.length] = new Card(rank[j],suit[i]); {
		   console.log(rank[j])
		   }
	   }
	   let draw = (rank, suit)
   }
}
console.log(Deck); 