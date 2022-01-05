// const SUITS = [
//     "Clubs", "Diamonds", "Hearts", "Spades"
// ]; 

// const RANKS = [
//     "2", "3", "4", "5", "6", "7", "8", "9", "10",
//     "Jack", "Queen", "King", "Ace"
// ];

// // for (x in RANKS)  {
// //     console.log(RANKS[x]);
// // }

// // for (let x=0; x < RANKS.length; x++) {
// //     console.log(RANKS[x]);
// // }

// // for (const item of RANKS) {
// //     console.log(item);
// // }
// // // RANKS.forEach((x, i) => console.log(RANKS[i]));
// // i = (Math.floor(Math.random() * RANKS.length)); 
// // j = (Math.floor(Math.random() * SUITS.length)); 
// // console.log(RANKS[i] + " of " + SUITS[j]); 

// deck =[];
// for (const rank of RANKS) 
//     for (const suit of SUITS) 
//         deck.push(rank + " of " + suit);
// // console.log(RANKS[i] + " of " + SUITS[j]); 

// // shuffle(deck);
// // console.log(deck);

// function shuffle(arr) {
//     for (x in arr) {
//         y = getRndValue(x, arr.length);
//         console.log(x + ":" + y);
//         tmp = arr[y];
//         arr[y] = arr[x];
//         arr[x] = tmp;
//     }
// }

// function getRndValue(min, max) {
//     return Math.floor((Math.random() 
//     * (max - min)) + min);
// }

// function shuffle2(arr) {
//     arr.map(mapRandom(current, index, arr), arr);
// }

// deck = shuffle2(deck);
// console.log(deck);

// function mapRandom(current, index, arr) {
//     y = getRndValue(index, arr.length);
//     return arr[y];

// }

arr1 = [1,2,3,4,5];
arr2 = arr1;
arr1.pop();
console.log(arr2);