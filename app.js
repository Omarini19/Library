const displ = document.getElementById('displ');
const newBookButton = document.getElementById('newBookButton');
const form = document.getElementById('formu');
formu.addEventListener('submit', addBook)

window.addEventListener('load',createTableIndex)


let book1 = new Book("Hobbit","Tolkien")
let myLibrary = [book1];



function Book(title, author) {
  // the constructor...
  this.title = title;
  this.author = author;
}

function UI (){

}


UI.prototype.deleteBook = function (target) {

  if (target.className === 'delete') {

      target.parentElement.parentElement.remove();
      myLibrary.splice(this.id,1);

  }
}

UI.prototype.turn = function (target) {

  if (target.className === 'read' || target.className === 'notRead') {

      target.classList.toggle("notRead");
      target.classList.toggle("read");  

  }
}

document.getElementById('displ').addEventListener('click', function (e) {



  // instancier UI
  const ui = new UI();
  // Effacer le livre
  ui.deleteBook(e.target);
  



  e.preventDefault();
});

document.getElementById('displ').addEventListener('click', function (e) {



  // instancier UI
  const ud = new UI();
  // Effacer le livre
  ud.turn(e.target);
  



  e.preventDefault();
});


function addBook(e) {
  e.preventDefault(); 
  addBookToLibrary();
  displayBooks();
  closeForm();
}

function addBookToLibrary(newbook) {
  // do stuff here
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
 newbook= new Book(title,author);
 return myLibrary.push(newbook);


}

function displayBooks(){
 cleanTable();
 createTableIndex();
myLibrary.forEach((book) => createTable(book))
;
}

function cleanTable(){
  displ.innerHTML = "";
}

function createTableIndex () {
  const tr = document.createElement("tr");
  const title = document.createElement("th");
  const author = document.createElement("th");
  const read = document.createElement("th")

  title.textContent = "Title";
  author.textContent = "Author";
  read.textContent = "Read";

  displ.appendChild(tr)
  tr.appendChild(title);
  tr.appendChild(author);
  tr.appendChild(read);

}


function createTable (book) {

const bookTr = document.createElement("tr");
const booktitle = document.createElement("td");
const bookauthor = document.createElement("td");
const tick = document.createElement("td")
const del = document.createElement("td")

tick.innerHTML = `<button class="read"></button>`;
del.id = myLibrary.indexOf(book);
del.innerHTML = `<a href="#" class="delete">X</a>`;
booktitle.textContent = book.title;
bookauthor.textContent = book.author;


displ.appendChild(bookTr);
bookTr.appendChild(booktitle);
bookTr.appendChild(bookauthor);
bookTr.appendChild(tick);
bookTr.appendChild(del);

}






newBookButton.addEventListener('click', openForm)


function openForm(){
document.getElementById("formu").style.display = "block";
}

function closeForm(){
  document.getElementById("formu").style.display = "none";
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
}

