//Create A book class
class Book{
    constructor(title, author, genre, year){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }
}

//Library class
class Library{
    static displayBooks(){
        const storedBooks = []
        const books =storedBooks;

        books.forEach((book) => Library.addBookToList(book))
    }
    static addBookToList(book){
        let list = document.querySelector("#book-list")

        let row = document.createElement("tr")
        row.innerHTML = `
        <td class='table-title'>${book.title}</td>
        <td class='table-author'>${book.author}</td>
        <td class='table-genre'>${book.genre}</td>
        <td class='table-year'>${book.year}</td>
        <td><a href="#" class="delete">X</a></td>
        <td><a href="#" class="edit">Edit</a></td>
        `
        list.appendChild(row)
    }

    // static deleteBook(el){
    //     console.log(el)
    //     let elementToBeDeleted = [...el]
    //     elementToBeDeleted.filter(item => {
    //         if(item.classList.contains("delete")){
    //             el.parentElement.parentElement.remove()
    //         }
    //     })
    //     // if (el.classList.contains('delete')) {
    //     //     
    //     // }
    // }

    static clearField(){
        document.querySelector("#title").value  = ''
        document.querySelector("#author").value = ''
        document.querySelector("#genre").value  = ''       
        document.querySelector("#year").value  = ''
    }

    static editBook(el){
        //Getting innerHTML of table
        let tableTitle = document.querySelector(".table-title").innerHTML
        let tableAuthor = document.querySelector(".table-author").innerHTML
        let tableGenre = document.querySelector(".table-genre").innerHTML
        let tableYear = document.querySelector(".table-year").innerHTML

        if (el.classList.contains('edit')) {
            document.querySelector("#title").value = tableTitle;
            document.querySelector("#author").value = tableAuthor;
            document.querySelector("#genre").value = tableGenre;
            document.querySelector("#year").value = tableYear;
        }
        el.parentElement.parentElement.remove()
    }
}

// Event listeners
document.addEventListener("LibraryContentLoaded", Library.displayBooks())

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
        Library.addBookToList(book)

        //Clear form
        Library.clearField()
    }
}))

//Delete A book
// document.querySelector("#book-list").addEventListener("click", clicked => {
//     Library.deleteBook(clicked.target)
// })
let allbooks = document.querySelectorAll(".delete")
let newbooks = [...allbooks]
newbooks.filter(item => {
    item.addEventListener('click', (item,i) => {
        let itemIndex = newbooks.indexOf(item)
        if (itemIndex !== -1) {
            newbooks.splice(itemIndex, 1);
        }
    })
})

//Editing a book
document.querySelector("#book-list").addEventListener("click", clicked => {
    Library.editBook(clicked.target)
})