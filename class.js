class Animal {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  speak() {console.log(`${this.name}`);}
}

class Dog extends Animal {
  constructor(name, size) { 
    super(name, size); 
  }
  speak() { 
    super.speak(); 
    console.log(`barks`);
  }
}


const dogs = [new Dog('Nina',1 ), new Dog('Nina',3 ), new Dog('Emily', 2), new Dog('Adam',5), new Dog('Adam', 1)];

/**
 * Accept an array of dogs and a search name
 * Search by dog name
 * return a new array of dogs
 */

 const searchByName = (dogs, searchName) => {
  result = [];
  for (const dog of dogs) {
    if (dog.name.toLowerCase() === searchName.toLowerCase()) {
      result.push(dog);
    }
  }
  return result;
 }

 const compareByName = (dog1, dog2) => {
  if (dog1.name.toLowerCase() > dog2.name.toLowerCase()) {
    return 1;
  } else if (dog1.name.toLowerCase() < dog2.name.toLowerCase()) {
    return -1
  }
  return 0;
 }

 for (const dog of dogs) {
   
 }
 console.log(searchByName(dogs, "nina"));
 console.log(dogs.sort(compareByName));
 const byName = dogs.sort(compareByName);
