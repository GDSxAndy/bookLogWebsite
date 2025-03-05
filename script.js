function addBook() {
    let table = document.getElementById("table");
    let bookName = document.getElementById("name").value;
    let authorName = document.getElementById("authorName").value;
    let genre = document.getElementById("genre").value;
    let status = document.getElementById("status").value;

    let row = table.insertRow();
    
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();

    cell1.innerHTML = bookName;
    cell2.innerHTML = authorName;
    cell3.innerHTML = genre;
    cell4.innerHTML = status;
    
    document.getElementById("name").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("status").value = "";
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
    // https://getbootstrap.com/docs/5.1/getting-started/introduction/
}