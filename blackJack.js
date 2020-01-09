
//Blackjack
//By : Steven Hejnas
//

//Creating the Deck
let name =  ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
let suit = ["Clubs", "Spades", "Diamonds", "Hearts"]
//let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let deck = [];
for (let suitIndex = 0; suitIndex < suit.length; suitIndex++) {
    for (let nameIndex = 0; nameIndex < name.length; nameIndex++) {
        deck.push (name[nameIndex] + " of " + suit[suitIndex])  
    }
}
console.log(deck)
// Deck now filled 
//
//pick 4 random cards and prevent duplicates

//2 cards to dealer and 2 cards to player
//total the cards
//is it more than 21?
//is it 21?
//how the hell am i going to work out a hit or a double down?
//how the hell do you work out that an ace can be 1 or 11?







/*let card1 = "";
let card2 = ";

console.log("Welcome to Blackjack!");
console.log("You have been dealt:")
console.log("  " + card1);
console.log("  " + card2);
*/





