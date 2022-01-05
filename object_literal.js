
const book = {
  id:12345,
  name: 'Game of Thrones',
  author: 'John Doe',
}

const book2 = {
  id:12345,
  name: 'Game of Thrones',
  author: 'John Doe',
}

const author = {
  name:"John Doe",
  age: 100,
  mybooks: [book, book2]
}

for(const prop in author) {
  console.log(prop + author[prop]);
}

console.log(book);
author.mybooks.push(book);
author.age = 101;
console.log(author);