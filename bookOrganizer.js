// 1️⃣ Array of book objects (minimum three)
const books = [
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960
  },
  {
    title: "The Catcher in the Rye",
    authorName: "J.D. Salinger",
    releaseYear: 1951
  }
];

// 2️⃣ Callback function for sorting by release year
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }
  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }
  return 0;
}

const specifiedYear = 1950;

const filteredBooks = books.filter(
  book => book.releaseYear <= specifiedYear
);
filteredBooks.sort(sortByYear);

console.log("Books released on or before " + specifiedYear + " sorted by release year:");
filteredBooks.forEach(book => {
  console.log(book.title + " (" + book.releaseYear + ")");
});