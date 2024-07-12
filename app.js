let addBtn = document.querySelector(".add-button")
let bookContainer = document.querySelector(".content-container")

const myLibrary = [];

submitClick()

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = false;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pageCount = document.querySelector("#page-count").value
    let read = false
    const newBook = new Book(title, author, pageCount, read);
    myLibrary.push(newBook);
    displayBooks(title, author, pageCount, read)
}

function displayBooks() {
    bookContainer.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let bookHTML = document.createElement("div");
        bookHTML.innerHTML = 
`        
<div class="book-card">
    <div class="book-info">  
        <p class="book-title">Title: ${myLibrary[i].title}</p>
        <p class="book-author">Author: ${myLibrary[i].author}</p>
        <p class="page-count">${myLibrary[i].pageCount} pages</p>
    </div>

    <div class="btn-container">
        <button class="button-48 toggle${i}" role="button"><span class="text toggle">${myLibrary[i].read ? "Read" : "Not read"}</span></button>
        <button class="button-48 remove${i}" role="button"><span class="text remove">Remove</span></button>
    </div>
</div>
`
        bookContainer.appendChild(bookHTML);
        let removeBtn = document.querySelector(`.remove${i}`)
        let toggle = document.querySelector(`.toggle${i}`)
        removeBook(removeBtn, i)
        toggleRead(toggle, i)
    }
}

function toggleRead (toggle, i) {
    toggle.addEventListener("click", function(){
        myLibrary[i].toggleRead();
        toggle.style.backgroundColor = "green"

        displayBooks()
    })
}

function removeBook(removeBtn, i) {
    removeBtn.addEventListener("click", function(){
        myLibrary.splice(i, 1)
        displayBooks()
    })
}

function submitClick() {
    addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    addBookToLibrary()
});
};

