let apiPost = async (url, p_name, p_age, p_color) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: p_name,
                age: p_age,
                color: p_color
            })
        })

        if (response.ok) {
            console.log("Object added successfully");
            apiRead("https://crudcrud.com/api/fc073a283b6942638df4888ae38cb508/unicorns")
        }
        else {
            console.log("Error adding object. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
};


let apiRead = async (url) => {
    try {
        await fetch(url)
            .then(response => response.json())
            .then(data => { console.log(data); })
    }
    catch (error) {
        console.log("Error:", error);
    }

}

let apiUpdate = async (link, objectId, p_name, p_age, p_color) => {
    const url = `${link}/${objectId}`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: p_name,
                age: p_age,
                color: p_color
            })
        })

        if (response.ok) {
            console.log("Object updated successfully");
            apiRead("https://crudcrud.com/api/fc073a283b6942638df4888ae38cb508/unicorns")
        }
        else {
            console.log("Error updating object. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
};

let apiDelete = async (link, objectId) => {
    const url = `${link}/${objectId}`;

    try {
        const response = await fetch(url, {
            method: "DELETE"
        });

        if (response.ok) {
            console.log("Object deleted successfully.");
            apiRead("https://crudcrud.com/api/fc073a283b6942638df4888ae38cb508/unicorns")
        } else {
            console.log("Error deleting object. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
};



// create
// apiPost("https://crudcrud.com/api/fc073a283b6942638df4888ae38cb508/unicorns","Adarsh",25,"brown")

// Read
// apiRead("https://crudcrud.com/api/fc073a283b6942638df4888ae38cb508/unicorns")

// update
// apiUpdate("https://crudcrud.com/api/fc073a283b6942638df4888ae38cb508/unicorns","64a956e4c632b703e8309e8b","Rashmita",25,"pink");

// delete
// apiDelete("https://crudcrud.com/api/fc073a283b6942638df4888ae38cb508/unicorns", '64a94a6ec632b703e8309e48')