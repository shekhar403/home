// Change color of heading
document.getElementById("heading").style.color = "red";

// change content and color of paragraph
document.getElementById("description").style.color = "blue";
document.getElementById("description").innerHTML = "Hello World";

//get input values and print them
const inputs = Array.from(document.getElementsByTagName("input"))

inputs.forEach((element, index) => {

    if (index === 0) {
        element.style.marginBottom = 50 + "px";
    }

    console.log(element.value)
});