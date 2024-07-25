/*  Task 1 */

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

/* Task 2 */

Book.prototype.display_books = function(){
    console.log(`Book: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
}


let book = new Book("Harry Potter", "J.K. Rwwlings", 223);

book.display_books()


















