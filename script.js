// Get references to HTML elements
const openDialogButton = document.getElementById("openDialog");
const dialog = document.getElementById("dialog");
const bookForm = dialog.querySelector("form");
const booksGrid = document.querySelector(".books-grid");

// Array to store the added books
const library = [];

// Function to add a book to the library
function addBook(title, author, pages, read) {
  const book = { title, author, pages, read };
  library.push(book);
}

// Function to display books in the grid
function displayBooks() {
  // Clear the current content of the books grid
  booksGrid.innerHTML = "";

  // Iterate through the library array and create HTML elements for each book
  library.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>${book.read ? "Read" : "Not Read"}</p>
      <button class="btn btn-remove" data-index="${index}">Remove</button>
    `;

    // Add an event listener to the remove button
    const removeButton = bookCard.querySelector(".btn-remove");
    removeButton.addEventListener("click", () => {
      // Remove the book from the library array
      library.splice(index, 1);
      // Re-display the updated list of books
      displayBooks();
    });

    booksGrid.appendChild(bookCard);
  });
}

// Event listener to open the dialog when clicking the "+ ADD BOOK" button
openDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

// Get a reference to the "Close" button inside the dialog
const closeDialogButton = dialog.querySelector(".btn-close");

// Event listener to close the dialog when clicking the "Close" button
closeDialogButton.addEventListener("click", () => {
  dialog.close();
});

// Event listener for form submission
bookForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get form input values
  const title = document.getElementById("title").value.trim(); // Remove leading/trailing spaces
  const author = document.getElementById("author").value.trim();
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  // Check if any of the required fields are empty
  if (!title || !author || !pages) {
    alert("Please fill out all required fields (Title, Author, Pages).");
    return; // Exit the function without adding the book
  }

  // Add the book to the library
  addBook(title, author, pages, read);

  // Display the updated list of books
  displayBooks();

  // Reset the form fields
  bookForm.reset();

  // Close the dialog
  dialog.close();
});

// Initial display of books when the page loads
displayBooks();
