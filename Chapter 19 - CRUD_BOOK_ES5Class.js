//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");
  //Create tr
  const row = document.createElement("tr")
  //Insert Colummns
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td> <a href="#" class = "delete">X</a></td>
  `
  list.appendChild(row)
}

//Clear fields after submit
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//delete Book
UI.prototype.deleteBook = function(target) {
  if (target.className === "delete") {
    const ui = new UI();
    ui.showAlert(`Book with title : ${target.parentElement.parentElement.getElementsByTagName("td")[0].innerHTML} deleted successfully.`, 'success');
    target.parentElement.parentElement.remove();

  }
}

//Alert for success or error
UI.prototype.showAlert = function(message, className) {
  //Alert div
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  const parent = document.querySelector('.container');

  //Insert before form
  const form = document.querySelector('#book-form');
  parent.insertBefore(div, form);

  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}

document.getElementById('book-form').addEventListener('submit', onSubmit);

function onSubmit(e) {
  //Get g
  let title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  const ui = new UI();
  const book = new Book(title, author, isbn);

  //
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please provide all field data', 'error')
  } else {
    //Add Book
    ui.addBookToList(book);
    ui.showAlert(`Book with title : ${book.title} added successfully.`, 'success');
    //Clear fields
    ui.clearFields();
    console.log(title, author, isbn);
  }

  e.preventDefault();
}

//For delete
document.getElementById('book-list').addEventListener('click', onClick);

function onClick(e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  //Show message
  console.log("Wow")
}
