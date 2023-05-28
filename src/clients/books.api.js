const serverURL = "http://localhost:3001";
const booksPath = "/books"

export function getBooks() {
  return fetch(`${serverURL}${booksPath}`).then((response)=>response.json());
}

export function getBook(isbn) {
  return fetch(`${serverURL}${booksPath}/?isbn=${isbn}`).then((response)=>response.json());
}