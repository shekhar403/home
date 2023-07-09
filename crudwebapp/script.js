const formElements = Array.from(document.forms['form']);
let selectedRow = undefined;
let table = document.getElementById("users-table");

function submitForm() {
    if (selectedRow == undefined) {
        addUser(readFormInputs());
    }
    else {
        editUser(readFormInputs());
    }

    clearForm();
}




function clearForm() {
    formElements.forEach((field) => {
        field.value = "";
    })
}

function readFormInputs() {
    let user = {};
    formElements.forEach((field, index) => {
        if (index == 0) {
            user.name = field.value;
        }
        else if (index == 1) {
            user.email = field.value;
        }
        else if (index == 2) {
            user.contact = field.value;
        }
    })

    return user;
}

function addUser(user) {
    
    let userRow = table.insertRow(table.rows.length);
    let idCell = userRow.insertCell(0);
    idCell.textContent = table.rows.length - 1;
    let nameCell = userRow.insertCell(1);
    nameCell.textContent =   user.name;
    let emailCell = userRow.insertCell(2);
    emailCell.textContent =  user.email;
    let contactCell = userRow.insertCell(3);
    contactCell.textContent =  user.contact;
    let editCell = userRow.insertCell(4);
    editCell.textContent = "Edit";
    editCell.style.color = "blue";
    editCell.addEventListener("click", (event) => {
        selectedRow = userRow;
        prefillForm();
    });
    editCell.style.textDecoration = "underline";

    let deleteCell = userRow.insertCell(5);
    deleteCell.textContent = "Delete";
    deleteCell.addEventListener("click", (event) => {
        deleteUser(userRow.rowIndex)
    });
    deleteCell.style.color = "blue";
    deleteCell.style.textDecoration = "underline";
}


function deleteUser(row) {
    console.log("deleting")
    table.deleteRow(row);
}

function editUser(user) {
    console.log("editing")
    selectedRow.cells[1].textContent = user.name;
    selectedRow.cells[2].textContent = user.email;
    selectedRow.cells[3].textContent = user.contact;

    clearForm();
}

function prefillForm() {
    formElements.forEach((field, index) => {
        if (index == 0) {
            field.value = selectedRow.cells[1].textContent;
        }
        else if (index == 1) {
            field.value = selectedRow.cells[2].textContent;
        }
        else if (index == 2) {
            field.value = selectedRow.cells[3].textContent;
        }
    })
}