// const state = {
//   name: 'WA',
//   capitol: 'Olympia',
//   population: 7.6,
//   city: {
//     name: 'Bellueve',
//     population: 3,
//   },
// }


// for (const prop in state) {
//   console.log(prop, state[prop]);
// }

// state.name = 'WS';
// console.log(state.name, state.capitol, state.population);

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   makeSound() { 
//     console.log('Makes a sound'); 
//   }
// }
// class Cat extends Animal {
//   constructor(name, age) {
//     super(name, age); //
//   }
//   makeSound() {
//     console.log(`I am ${this.age} and I am Meow`);
//   }
// }
// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
// }
// const animal = new Animal('No name', 10000);
// const myCat = new Cat("Nina", 2);
// const myDog = new Dog("friendly");
// myDog.makeSound();
// animal.makeSound();
// myCat.makeSound();

const arr = ['testtest', 'test', 'test1', 'test2', 'test8', 'test99', 'hello'];
const regex = /.*(lo)$/;

for (const str of arr) {
  console.log(regex.test(str));
}

const text = ```
afsdf asdfsdf 
sfsdfsdf asdfsdf      
```

