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