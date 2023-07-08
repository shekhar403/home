let firstPromise = new Promise((resolve) => {
    console.log("first promise");
    resolve();
})
.then(() => {
    new Promise((resolve) => {
        console.log("second promise");
        resolve();
    })
    .then(() => {
        new Promise((resolve, reject) => {
            console.log("third promise");
            resolve();
        })
        .then(() => {
            new Promise((resolve, reject) => {
                console.log("fourth promise");
                resolve();
            })
            .then(() => {
                console.log("done promising");
            })
        })
    })
})