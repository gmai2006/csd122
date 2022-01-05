`
create classes called Author, Book, and Library
Author:(name, an array of books)

Book:(title, isbn, year, authorNames, publisher)

Library (name, an array of books)
searchByBookTitle should return an array of books
searchByAuthorName should return an array of books
`

class Book {
  constructor(title, isbn, year, authorNames, publisher) {
    this.title = title;
    this.isbn = isbn;
    this.year = year;
    this.authorNames = authorNames;
    this.publisher = publisher;
  }
}

class Author {
  constructor(name, books) {
    this.name = name;
    this.books = books;
  }
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = books;
  }

  searchByBookTitle(bookTitle) {
    const result = [];
    // for (let index = 0; index < this.books.length; index++) {
    //   if (books[index].title === bookTitle) {
    //     result.push(books[index]);
    //   }
    // }
    for (const book of books) {
      if (book.title === bookTitle) {
        result.push(book);
      }
    }
    return result;
  }

  searchByAuthorName(authorName) {
    const result = [];
    for (const book of this.books) {
      if (book.authorNames.includes(authorName)) {
        result.push(book);
      }
    }
    return result;
  }

  searchByAuthorName2(authorName) {
    const result = [];
    for (const book of this.books) {
      for (const name of book.authorNames) {
        if (name.toLowerCase().includes(authorName.toLowerCase())) {
          result.push(book);
        }
      }
    }
    return result;
  }

  searchByIsbn(search) {
    const result = [];
    for (const book of this.books) {
      if (book.isbn.includes(search)) {
        result.push(book);
      }
    }
    return result;
  }

  searchByIsbn2(search) {
    const isbns = this.books.map(book => book.isbn);
    return searchByString(isbns, search);
  }

  searchPublisher(search) {
    publishers = this.books.map(book => book.publisher);
    return searchByString(publishers, search);
  }

  searchBeforeOrEqualYear = (year) => {
    const result = [];
    for (const book of this.books) {
      if (book.year <= year) result.push(book);
    }
    return result;
  }
}

const searchByString = (arr, search) => {
  return arr.filter((item) => item.includes(search));
}

const books = [
  new Book(`Holes`, '1111', 2015, ['Louis Sachar', 'Tom Jerry'], 'Newyork Press'),
  new Book(`Eloquent JS`, '2221', 2010, ['Marijn Haverbeke', 'Name 1'], 'Newyork Press'),
  new Book(`Thinner`, '3333', 2009, ['Steven King'], 'Newyork Press'),
  new Book(`Three musketeers`, '6666', 1844, ['Alexandre Dumas', 'Tom Jerry'], 'Newyork Press')
];

const authors = [
  new Author('Steven King', [books[2]]),
  new Author('Louis Sachar', [books[0]]),
  new Author('Marijn Haverbeke', [books[1]]),
  new Author('Alexandre Dumas', [books[3]]),
];

const library = new Library('Lynnwood', books);

// const searchByName = library.searchByAuthorName('Steven King');
// console.log(searchByName);

// const searchByAuthors = library.searchByAuthorName2('e');
// console.log(searchByAuthors);

// const searchByIsbn = library.searchByIsbn2('1');
// console.log(searchByIsbn);

const searchByYear = library.searchBeforeOrEqualYear(2010);
console.log(searchByYear);
