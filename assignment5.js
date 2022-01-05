// class ShoppingCart {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() { return this.items; }
//     addItem(item) { this.items.push(item);}
// }

// class Item {
//     constructor (itemName, itemPrice) {
//         this.name = itemName;
//         this.price = itemPrice;
//     }
//     getName() { return this.name; }
//     getPrice() { return this.price; }
// }

// function cashRegister(cart) {
//     let totalprice = 0.0;
//     cart.getItems().forEach(item => {
//         totalprice += item.getPrice();
//     });
//     return totalprice;
// }

// item1 = new Item('test', 5.6);
// item2 = new Item('auto', 5444.6);
// item3 = new Item('boat', 4567.6);
// item4 = new Item('tv', 5666.6);

// cart = new ShoppingCart([]);
// cart.addItem(item1);
// cart.addItem(item2);
// cart.addItem(item3);
// cart.addItem(item4);

// console.log(cashRegister(cart));

let fruits = ["Apple", "Orange"];
for (item in fruits) {
  item = "reset";
}
console.log(fruits);

function shuffle(arr) {
    for (let x = 0; x < arr.length; x++) {
    
    let randomIndex = getRndInteger(x, arr.length - x);
    tmp = arr[x];
    arr[x] = arr[randomIndex];
    arr[randomIndex] = tmp;
    }
    return arr;
    }