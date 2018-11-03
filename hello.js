 
  hello = function(name) {
     return 'Hello CSD 122 ' + name
 }
function hello2(name) {
    return 'Hello 2 CSD 122 ' + name
 }

 var y = 9999999999999999.99;
 var x = 2 + 0.1;  
 var z = 16 + + 2 + "Volvo";

 console.info(y)
 console.info(x)
 console.info(z)

var test = "I'm global";
function testScope() {
  let test = "I'm local";
  console.log (test);     
}
testScope();           // output: I'm local
console.log(test);     // output: I'm global

var test=4
var TEST = 5
console.log(test + TEST)

function myFunction() {
    for (x = 0; x < 5; x++) {
        if (x === 1) return x;
    }
}

console.log(myFunction())

Boolean(10 > 9) 

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log( fruits.length ); // ?

const artistsAndSongs = {
    'Prince': ["Purple Rain", "When Doves Cry"],
    'The Beatles': ["Revolution", "Norwegian Wood"],
    'Joni Mitchell': ["A Case of You", "Sunny Sunday"],
    'Justin Bieber': ["Baby"]
  }
  
  artistsAndSongs['Daft Punk'] = ["Harder, Better, Faster, Stronger"]
  
  delete artistsAndSongs["Justin Bieber"]

  console.info(artistsAndSongs['Prince']);

  var myVar = "First string"; 
function example1() {
     var myVar="Second string"; 
}
example1(); 
console.log(myVar);

var newVar = "First string"; 
function example2() {
     newVar = "Second string"; }
example2(); 
console.log(newVar);

 