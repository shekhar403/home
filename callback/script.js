var counter = 10;

function mainFunction() {
    document.getElementById("countdown").textContent = "Happy Independance Day";
}

function callbackFunction(callback) {
    console.log(counter);
    document.getElementById("countdown").textContent = counter;
    counter -= 1;
    
    setTimeout(() => {
        callback()
    }, 1000);
}


callbackFunction(function () {
    callbackFunction(function () {
        callbackFunction(function () {
            callbackFunction(function () {
                callbackFunction(function () {
                    callbackFunction(function () {
                        callbackFunction(function () {
                            callbackFunction(function () {
                                callbackFunction(function () {
                                    callbackFunction(function () {
                                        mainFunction();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

// using promise

// var counter = 10;

// function mainFunction() {
//     document.getElementById("countdown").textContent = "Happy Independance Day";
// }

// function callbackFunction() {
//     return new Promise((resolve, reject) => {
//         document.getElementById("countdown").textContent = counter;
//         counter -= 1;

//         setTimeout(() => {
//             resolve()
//         }, 1000);
//     })
// }

// callbackFunction()
// .then(callbackFunction)
// .then(callbackFunction)
// .then(callbackFunction)
// .then(callbackFunction)
// .then(callbackFunction)
// .then(callbackFunction)
// .then(callbackFunction)
// .then(callbackFunction)
// .then(callbackFunction)
// .then(callbackFunction)
// .then(mainFunction)


// using async / await
// var counter = 10;

// function mainFunction() {
//     document.getElementById("countdown").textContent = "Happy Independance Day";
// }

// function callbackFunction() {
//     return new Promise((resolve, reject) => {
//         document.getElementById("countdown").textContent = counter;
//         counter -= 1;

//         setTimeout(() => {
//             resolve()
//         }, 1000);
//     })
// }

// async function out() {
//     await callbackFunction();
//     await callbackFunction();
//     await callbackFunction();
//     await callbackFunction();
//     await callbackFunction();
//     await callbackFunction();
//     await callbackFunction();
//     await callbackFunction();
//     await callbackFunction();
//     await callbackFunction();
//     await callbackFunction();
//     mainFunction();
// }

// out();
