let container = document.querySelector(".container");

const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        data.map((item) => {
            let div = document.createElement("div")
            div.innerHTML = `
            <p>Name: ${item.name}</p>
            <p>Email: ${item.email}</p>
            <p>Phone: ${item.phone}</p>
            <p>Website: ${item.website}</p>
            <p>Address: ${item.address.suite} ${item.address.street} ${item.address.city}</p>
            `
            container.appendChild(div)
        })


    })
}

fetchUsers();

function myFunction() {
let input = document.getElementById('myInput');
let filter = input.value.toUpperCase();
let divs = container.getElementsByTagName('div');

    for (i = 0; i < divs.length; i++) {
        let allP = divs[i].getElementsByTagName("p")[0];
        let txtValue = allP.textContent || allP.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = "";
        } else {
        divs[i].style.display = "none";
        }
    }
}