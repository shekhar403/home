// let a = async (num) => {
//     let promise = new Promise((resolve) => {
//         if (num % 2 === 0) {
//             resolve("even");
//         }
//         else {
//             resolve("odd");
//         }
//     });

//     console.log(await promise);
// }

// a(10);

// let checkArmstrong = async (num) => {
//     let promise = new Promise((resolve) => {
//         let sum = 0;
//         let originalNum = num;
//         while(num != 0) {
//             let rem = num % 10;
//             sum = sum + Math.pow(rem, 3);
//             num = parseInt(num / 10);
//         }

//         if (sum === originalNum) {
//             resolve("Armstrong");
//         }
//         else {
//             resolve("Not Armstrong");
//         }
//     })

//     console.log(await promise);
// }

// checkArmstrong(153);


// let shouldBuy = async (budget) => {
//     let promise = new Promise((resolve, reject) => {
//         if (budget < 500) {
//             reject("Don't buy");
//         }
//         else if (budget >= 500 && budget <= 1000) {
//             resolve("Buy A");
//         }
//         else {
//             resolve("Buy B");
//         }
//     });

//     let a = await promise.catch(error => {console.log(error)});

//     if (a !== undefined) {
//         console.log(a);
//     }

// }

// shouldBuy(200);


let a = async () => {
    // await fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((value) => value.json())
    //     .then((data) => console.log(data));

    // let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // let data = await response.json()
    // console.log(data)
}

a();
