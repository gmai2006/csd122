var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];

  // console.log(library.map(item => item.title).sort());
library.sort((a, b) => a.title.localeCompare(b.title));

  const searchByAuthor = (arr, author) => arr.filter(item => item.author === author);

  // console.log(searchByAuthor(library, 'Bill Gates'));

  const remove = (arr, a) => arr.filter(item => item !== a);

  arr = [2, 5, 9, 6]

  console.log(remove(arr, 2));