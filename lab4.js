const SUITS = ["Club", "Diamond", "Heart", "Spade"];
const RANKS = ["2", "3", "4", "5", "6", "7", 
"8", "9", "10", "Jack", "Queen", "King", "Ace"];

const USERS = 5;
const CARDS_PER_USERS = 5;

decks = [];

for (suit of SUITS) {
    for (rank of RANKS) {
        decks.push(rank  + " of " + suit);
    }
}



function shuffle(arr) {
    for (let x = 0; x < arr.length; x++) {
        randomIndex = getRndInteger(x, arr.length - x);
        tmp = arr[x];
        arr[x] = arr[randomIndex];
        arr[randomIndex] = tmp;
    }
    return arr;
}

// decks = shuffle(decks);
// console.log(decks);

decks = shuffle2(decks);
console.log(decks);

// dealCards(decks, USERS, CARDS_PER_USERS);

function dealCards(decks, users, cards_per_users) {
    for (let index = 0; index < users; index++) {
        for (let j = 0; j < cards_per_users; j++) {
            console.log("Deal a card " + decks[index * j] 
            + " to user " + index);
        }
        console.log("Next player....");
    }
}

function shuffle2(arr) {
    return arr.map((value, index, arr) => {
        randomIndex = getRndInteger(index, arr.length);
        console.log(index + ":" + randomIndex);
        return arr[randomIndex];
    });
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() 
    * (max - min) ) + min;
  }