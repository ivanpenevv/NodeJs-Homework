import fs from "fs";

fs.writeFileSync("user_info.txt", "Ivan Penev is the best student in QinShift Academy");

const books = [
  { id: 1, title: 'The Enchanting Garden', author: 'Isabella Waters', genre: 'Fantasy' },
  { id: 2, title: 'Midnight Shadows', author: 'Alex Nightingale', genre: 'Mystery' },
  { id: 3, title: 'Tech Titans', author: 'Sam Quantum', genre: 'Science Fiction' },
  { id: 4, title: 'Whispers in the Wind', author: 'Lily Starlight', genre: 'Romance' },
  { id: 5, title: 'The Art of Deception', author: 'Max Mirage', genre: 'Thriller' },
  { id: 6, title: 'Echoes of Eternity', author: 'Serena Eclipse', genre: 'Historical Fiction' },
  { id: 7, title: 'Beyond the Horizon', author: 'Chris Nova', genre: 'Adventure' },
  { id: 8, title: 'The Quantum Paradox', author: 'Eva Quantum', genre: 'Science Fiction' },
  { id: 9, title: 'Moonlit Sonata', author: 'Oliver Nightfall', genre: 'Fantasy' },
  { id: 10, title: 'A Dance with Shadows', author: 'Aria Starlight', genre: 'Mystery' }
];

const writeBooksData = (books) => {
  const booksData = books.map(book =>
    `${book.id} ${book.title} by ${book.author} is of genre ${book.genre},`
  ).join('\n');
  }
  
writeBooksData(books);