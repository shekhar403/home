function checkEvenOdd(number) {
    let myPromise = new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("Even");
        }
        else {
            reject("Odd");
        }
    })

    return myPromise;
}

document.getElementById("submit").addEventListener("click", () =>{
    let number = parseInt(document.getElementById("num").value);
    console.log(number);
    checkEvenOdd(number)
    .then((value) => {
        document.getElementById("outcome").textContent = "Outcome: " +value;
    })
    .catch((value) => {
        document.getElementById("outcome").textContent = "Outcome: " + value;
    })
});

function checkPalidrome(str) {
    let myPromise = new Promise((resolve, reject) => {
        if (str.split("").reverse().join("") === str) {
            resolve("Palindrome");
        }
        else {
            reject("Not a Palindrome");
        }
    })

    return myPromise;
}

document.getElementById("submit2").addEventListener("click", () =>{
    let str = document.getElementById("str").value;

    checkPalidrome(str)
    .then((value) => {
        document.getElementById("outcome2").textContent = "Outcome: " +value;
    })
    .catch((value) => {
        document.getElementById("outcome2").textContent = "Outcome: " + value;
    })
});

function addDelay() {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 5000);
    })

    return myPromise;
}

addDelay()
.then(() => {
    document.getElementById("delay-text").textContent = "Hello World";
})
