var header = document.createElement("h1");
header.id = "title";
header.textContent = "Calculator";
document.body.appendChild(header);
var description = document.createElement("p");
description.id = "description";
description.textContent = "Mini Calculator Website Assignment";
document.body.appendChild(description);
var containerDiv = document.createElement("div");
containerDiv.classList.add("container", "rounded-1", "w-50");

var displayInput = document.createElement("input");
displayInput.classList.add("w-100", "mt-4");
displayInput.type = "text";
displayInput.name = "result";
displayInput.value = "";
displayInput.placeholder = "0";
displayInput.id = "result";
containerDiv.appendChild(displayInput);

containerDiv.appendChild(document.createElement("hr"));

var buttons = [
    ["C", "←", ".", "*"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", "%", "="]
];

for (var i = 0; i < buttons.length; i++) {
    var rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (var j = 0; j < buttons[i].length; j++) {
        var colDiv = document.createElement("div");

        if (buttons[i][j] === "=") {
            colDiv.classList.add("col-6");
        }
        else {
            colDiv.classList.add("col-3");
        }

        var button = document.createElement("button");
        button.textContent = buttons[i][j];
        button.id = buttons[i][j];

        if (buttons[i][j] === "=") {
            button.classList.add("bg-primary", "text-white", "w-75");
            button.id = "equal";
        } else if (buttons[i][j] === "C") {
            button.classList.add("text-danger");
            button.id = "clear";
        } else if (buttons[i][j] === "+") {
            button.classList.add("text-primary");
            button.id = "add";
        } else if (buttons[i][j] === "-") {
            button.classList.add("text-primary");
            button.id = "subtract";
        } else if (buttons[i][j] === "*") {
            button.classList.add("text-primary");
            button.id = "multiply";
        } else if (buttons[i][j] === "/") {
            button.classList.add("text-primary");
            button.id = "division";
        } else if (buttons[i][j] === "%") {
            button.classList.add("text-primary");
            button.id = "modulos";
        } else if (buttons[i][j] === ".") {
            button.classList.add("text-primary");
            button.id = "decimal";
        }

        colDiv.appendChild(button);
        rowDiv.appendChild(colDiv);
    }

    containerDiv.appendChild(rowDiv);
    containerDiv.appendChild(document.createElement("hr"));
}

document.body.appendChild(containerDiv);
displayInput.focus();
displayInput.select();

// adding event listeners
displayInput.addEventListener("keypress", (event) => {
    if (document.activeElement === displayInput) {
        if (event.key === "Backspace") {
            // allowing deletion
        }
        if (isNaN(+event.key)) {
            alert("Only numbers are allowed");
            event.preventDefault();
        }
    }
})

let buttonsArray = Array.from(document.getElementsByTagName("button"));
var lastCharacter = "";
var operators = ["+","-","*","/","%","."];

buttonsArray.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(operators);
        console.log(button.textContent);
        console.log(lastCharacter);
        if (operators.includes(lastCharacter) && operators.includes(button.textContent)) {
            console.log("not allowed")
            displayInput.value = displayInput.value.substring(0, displayInput.value.length - 1);
        }

        if (button.textContent === "C") {
            displayInput.value = "";
        }
        else if (button.textContent === "←") {
            displayInput.value = displayInput.value.substring(0, displayInput.value.length - 1);
        }
        else if (button.textContent === "=") {
            displayInput.value = evaluateExpression(displayInput.value);
        }
        else {
            displayInput.value += button.textContent;
        }

        lastCharacter = button.textContent;
    })
})

function evaluateExpression(expression) {
    let firstOperand = parseInt(expression.charAt(0));
    let secondOperand = parseInt(expression.charAt(2));
    let operator = expression.charAt(1);

    if (operator === "+") {
        return firstOperand + secondOperand;
    }

    if (operator === "-") {
        return firstOperand - secondOperand;
    }

    if (operator === "*") {
        return firstOperand * secondOperand;
    }

    if (operator === "/") {
        return firstOperand / secondOperand;
    }

    // if (operator === "%") {
    //     return firstOperand % secondOperand;
    // }

    return Error;
    
}




