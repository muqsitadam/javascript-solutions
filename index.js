//Create A book class
class Book{
    constructor(title, author, genre, year){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }
}

//DOM class
class DOM{
    static displayBooks(){
        const storedBooks = [
            {
                title: "Book A",
                author: "John Doe",
                genre: "Sci-fi",
                year: 1985
            },
            {
                title: "Book B",
                author: "Jane Doe",
                genre: "Horror",
                year: 2000
            },
            {
                title: "Book C",
                author: "Jane John",
                genre: "Adventure",
                year: 2005
            }
        ]
        const books =  storedBooks

        books.forEach((book) => DOM.addBookToList(book))
    }
    static addBookToList(book){
        let list = document.querySelector("#book-list")

        let row = document.createElement("tr")
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
        <td>${book.year}</td>
        <td><a href="#" class="delete">X</a></td>
        `
        list.appendChild(row)
    }

    static deleteBook(el){
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove()
        }
    }

    static clearField(){
        document.querySelector("#title").value  = ''
        document.querySelector("#author").value = ''
        document.querySelector("#genre").value  = ''       
        document.querySelector("#year").value  = ''
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", DOM.displayBooks())

//Add a book
document.querySelector("form").addEventListener('submit', (submit => {
    //Stop flashing by preventing default action
    submit.preventDefault()
    
    //Get inputs values
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const genre = document.querySelector("#genre").value
    const year = document.querySelector("#year").value

    //Validation
    if (title === '' || author === '' || year === '') {
        alert("Please fill in all fields")
    } else {
        //Create new book
        const book = new Book(title,author,genre,year)

        //Add book to list
        DOM.addBookToList(book)

        //Clear form
        DOM.clearField()
    }
}))

//Delete A book
document.querySelector("#book-list").addEventListener("click", clicked => {
    DOM.deleteBook(clicked.target)
})