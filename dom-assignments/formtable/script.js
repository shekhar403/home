function validateForm() {
    const formElements = Array.from(document.forms['form']);

    // validating food choices
    let foodChoiceCount = 0;
    for (let i = 6; i <= 10; i++) {
        foodChoiceCount += formElements[i].checked ? 1 : 0;
    }

    if (foodChoiceCount < 3) {
        alert("Please select more than 3 food choices");
        return;
    }

    // clearing tableview
    document.getElementById("fname-submitted").textContent = ""
    document.getElementById("lname-submitted").textContent = ""
    document.getElementById("address-submitted").textContent = ""
    document.getElementById("pincode-submitted").textContent = ""
    document.getElementById("gender-submitted").textContent = ""
    document.getElementById("food-choice-submitted").textContent = ""
    document.getElementById("state-submitted").textContent = ""
    document.getElementById("country-submitted").textContent = ""


    formElements.forEach((field, index) => {
        switch(index) {
            case 0:
                document.getElementById("fname-submitted").textContent = field.value;
                break;
            case 1:
                document.getElementById("lname-submitted").textContent = field.value;
                break;
            case 2:
                document.getElementById("address-submitted").textContent += " " + field.value;
                break;
            case 3:
                document.getElementById("pincode-submitted").textContent = field.value;
                break;
            case 4:
            case 5:
                console.log(field);
                console.log(field.checked);
                console.log(field.value);
                if (field.checked) {
                    document.getElementById("gender-submitted").textContent = field.value;
                }
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                console.log(field);
                console.log(field.checked);
                console.log(field.value);
                if (field.checked) {
                    if (document.getElementById("food-choice-submitted").textContent === "") {
                        document.getElementById("food-choice-submitted").textContent = field.value;
                    }
                    else {
                        document.getElementById("food-choice-submitted").textContent += ", " + field.value;
                    }
                }
                break;
            case 11:
                document.getElementById("state-submitted").textContent = field.value;
                break;
            case 12:
                document.getElementById("country-submitted").textContent = field.value;
                break;
        }

        // clearing forms
        if (field.type === "radio") {
            field.checked = false;
        }
        else {
            field.value = "";
        }
    });
}