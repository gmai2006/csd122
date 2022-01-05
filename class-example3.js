class Book {
  constructor(id, name, author) {
    this.id = id;
    this.bookName = name;
    this.authorName = author;
  }
}

class Author {
  constructor(n, age, books) {
    this.name = n;
    this.age = age;
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookId) {
    this.books = this.books.filter((book) => book.id !== bookId);
  }

  searchBookByName(startsWith) {
    var regex = new RegExp("^" + startsWith, "i");
    return this.books.filter((book) => regex.test(book.bookName));
  }

  getBooks() { return this.books; } 
}

const john = new Author('Jane', 34, []);
const books = [
                new Book(1, 'JS', john.name),
                new Book(1, 'Java', john.name),
                new Book(2, 'CS', john.name),
                new Book(3, 'Physics', john.name)
              ];
         
books.forEach(book => john.addBook(book));
console.log(john);
console.log(john.searchBookByName('c'));
// john.removeBook(1);
// console.log(john);
