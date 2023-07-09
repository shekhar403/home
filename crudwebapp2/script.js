const formElements = Array.from(document.forms['form']);
let selectedRow = undefined;
const table = document.getElementById("users-table");
const userId = "f656b081889c493ba4c464af95e34388";
let users = [];

function submitForm() {
    if (selectedRow == undefined) {
        const user = readFormInputs();
        apiPost("https://crudcrud.com/api/"+ userId +"/unicorns", table.rows.length - 1, user.name, user.email, user.contact);
    }
    else {
        editUser(readFormInputs());
    }
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
        selectedRow = userRow;
        deleteUser();
    });
    deleteCell.style.color = "blue";
    deleteCell.style.textDecoration = "underline";
}

function deleteUser() {
    console.log("deleting")
    const deletionId = users[selectedRow.rowIndex - 1]._id;
    apiDelete("https://crudcrud.com/api/"+ userId +"/unicorns", deletionId)
}

function editUser(user) {
    console.log("editing")
    const updationId = users[selectedRow.rowIndex - 1]._id;
    apiUpdate("https://crudcrud.com/api/"+ userId +"/unicorns", updationId, user.id, user.name, user.email, user.contact);

}

// Table methods

function reloadTable() {
    Array.from(document.getElementById("users-table").rows).forEach((row, index) => {
        if (index != 0) {
            row.remove();
        }
    })

    users.forEach((user) => {
        addUser(user);
    })
}

// Form methods

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

function clearForm() {
    formElements.forEach((field) => {
        field.value = "";
    })
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

// Network call


const apiPost = async (url, p_id, p_name, p_email, p_contact) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: p_id,
                name: p_name,
                email: p_email,
                contact: p_contact
            })
        })

        if (response.ok) {
            console.log("User added successfully");
            apiRead();
        }
        else {
            console.log("Error adding user. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
};

const apiRead = async () => {
    try {
        await fetch("https://crudcrud.com/api/"+ userId +"/unicorns")
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                users = [...data];
                reloadTable();
                selectedRow = undefined;
                clearForm();
            })
    }
    catch (error) {
        console.log("Error:", error);
    }

}

const apiUpdate = async (link, updateId, p_id, p_name, p_email, p_contact) => {
    const url = `${link}/${updateId}`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: p_id,
                name: p_name,
                email: p_email,
                contact: p_contact
            })
        })

        if (response.ok) {
            console.log("User updated successfully");
            apiRead();
        }
        else {
            console.log("Error updating user. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
};

const apiDelete = async (link, p_id) => {
    const url = `${link}/${p_id}`;

    try {
        console.log(url);
        const response = await fetch(url, {
            method: "DELETE"
        });

        console.log(response);
        if (response.ok) {
            console.log("User deleted successfully.");
            apiRead();
        } else {
            console.log("Error deleting user. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
};

apiRead();