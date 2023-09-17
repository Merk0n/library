const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks(array) {
  return array.forEach((book) => {
    console.log(book);
  });
}

// DOM dialog & button
const openDialog = document.getElementById("openDialog");
const dialog = document.getElementById("dialog");

// Update button opens a modal dialog
openDialog.addEventListener("click", () => {
  dialog.showModal();
});
