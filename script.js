function addBook(bookName, authorName, genre, status, rating, animation) {
    let table = document.getElementById("table");
    let isUserAdded = !arguments.length;
    
    if (!bookName) bookName = document.getElementById("name").value;
    if (!authorName) authorName = document.getElementById("authorName").value;
    if (!genre) genre = document.getElementById("genre").value;
    if (!status) status = document.getElementById("status").value;
    if (!rating) rating = document.getElementById("rating").value;
    if (!animation) animation = document.getElementById("animation").value;

    let row = table.insertRow();
    
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();
    let cell6 = row.insertCell();

    cell1.innerHTML = bookName;
    cell2.innerHTML = authorName;
    cell3.innerHTML = genre;
    cell4.innerHTML = status;
    cell5.innerHTML = rating;
    cell6.innerHTML = animation;
    
    if (isUserAdded) {
        document.getElementById("name").value = "";
        document.getElementById("authorName").value = "";
        document.getElementById("genre").value = "";
        document.getElementById("status").value = "";
        document.getElementById("rating").value = "";
        document.getElementById("animation").value = "";
    }

    if (isUserAdded && status.toLowerCase() === "read") {
        showCelebrationMessage(bookName);
    }
}

function deleteBook(){
    let table = document.getElementById("table");
    let rows = table.getElementsByTagName("tr");
    let deleteBook = document.getElementById("delete").value.trim().toLowerCase();

    for (let i = 0; i < rows.length; i++) {
        let cell = rows[i].getElementsByTagName("td")[0];
        if (cell && cell.textContent.trim().toLowerCase() === deleteBook) {
            table.deleteRow(i);
            break;
        }
    }
}

function searchBooks() {
    let table = document.getElementById("table");
    let rows = table.getElementsByTagName("tr");
    let searchTitle = document.getElementById("searchTitle").value.trim().toLowerCase();
    let searchAuthor = document.getElementById("searchAuthor").value.trim().toLowerCase();

    for (let i = 1; i < rows.length; i++) {
        let titleCell = rows[i].getElementsByTagName("td")[0];
        let authorCell = rows[i].getElementsByTagName("td")[1];
        let titleMatch = titleCell && titleCell.textContent.trim().toLowerCase().includes(searchTitle);
        let authorMatch = authorCell && authorCell.textContent.trim().toLowerCase().includes(searchAuthor);

        if (titleMatch || authorMatch) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function sortBooks() {
    let table = document.getElementById("table");
    let rows = Array.from(table.getElementsByTagName("tr")).slice(1);
    let sortOption = document.getElementById("sortOptions").value;

    rows.sort((a, b) => {
        let cellA, cellB;
        switch (sortOption) {
            case "title":
                cellA = a.getElementsByTagName("td")[0].textContent.trim().toLowerCase();
                cellB = b.getElementsByTagName("td")[0].textContent.trim().toLowerCase();
                break;
            case "author":
                cellA = a.getElementsByTagName("td")[1].textContent.trim().toLowerCase();
                cellB = b.getElementsByTagName("td")[1].textContent.trim().toLowerCase();
                break;
            case "genre":
                cellA = a.getElementsByTagName("td")[2].textContent.trim().toLowerCase();
                cellB = b.getElementsByTagName("td")[2].textContent.trim().toLowerCase();
                break;
            case "status":
                cellA = a.getElementsByTagName("td")[3].textContent.trim().toLowerCase();
                cellB = b.getElementsByTagName("td")[3].textContent.trim().toLowerCase();
                break;
            default:
                return 0;
        }
        return cellA.localeCompare(cellB);
    });

    rows.forEach(row => table.appendChild(row));
}

function filterBooks() {
    let table = document.getElementById("table");
    let rows = table.getElementsByTagName("tr");
    let filterOption = document.getElementById("filterOptions").value;

    for (let i = 1; i < rows.length; i++) {
        let statusCell = rows[i].getElementsByTagName("td")[3];
        if (filterOption === "" || (statusCell && statusCell.textContent.trim().toLowerCase() === filterOption)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function showCelebrationMessage(bookName) {
    alert(`Congratulations on finishing "${bookName}"!`);
}
