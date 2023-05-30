// 1.a. Print odd numbers in an Array
// (Using Anonymous function)

// let inputArray = [1,2,3,4,5,6,7,8,9,0];
// let oddNumbers = function(inputArray) {
//     return inputArray.filter(num => num % 2 !== 0);
// }

// console.log(oddNumbers(inputArray));

// (using IIFE)

// let inputArray = [1,2,3,4,5,6,7,8,9,0];

// (() => {
//     console.log(inputArray.filter(num => num % 2 !== 0));
// })();

// 1.b. Convert the strings to title case
// anonymous function
// let inputArray = ["hello", "world", "foo", "bar", "vscode"];
// let titleCase = function(inputArray) {
//     return inputArray.map(str => str[0].toUpperCase() + str.substring(1, str.length).toLowerCase());
// }

// console.log(titleCase(inputArray));

// iife
// let inputArray = ["hello", "world", "foo", "bar", "vscode"];
// (() => {
//     console.log(inputArray.map(str => str[0].toUpperCase() + str.substring(1, str.length).toLowerCase()));
// })();

// 1.c sum of all numbers
// anonymous function
// let inputArray = [1,2,3,4,5,6,7];
// let sum = function(inputArray) {
//     let sum = 0;

//     inputArray.forEach(num => {
//         sum += +num;
//     });

//     return sum;
// }

// console.log(sum(inputArray));

//IIFE
// let inputArray = [1,2,3,4,5,6,7];
// (() => {
//     let sum = 0;

//     inputArray.forEach(num => {
//         sum += +num;
//     });

//     console.log(sum);
// })();

// 1.d. prime numbers
// anonymous function
// let inputArray = [1,2,3,4,5,6,7];
// let prime = function(inputArray) {
//         let count = 0;

//         return inputArray.filter(num => {
//             for (let i = 2; i < num; i++) {
//                 if (num % i === 0) {
//                     count++;
//                     break;
//                 }
//             }

//             return count === 0;
//         })
//     }
    
// console.log(prime(inputArray));

//IIFE

// let inputArray = [1,2,3,4,5,6,7];
// (() => {
//         let count = 0;

//         console.log(inputArray.filter(num => {
//             for (let i = 2; i < num; i++) {
//                 if (num % i === 0) {
//                     count++;
//                     break;
//                 }
//             }

//             return count === 0;
//         }))
//     })();

// 1.e palindromes
// anonymous function
// let inputArray = ["bus", "civic", "deed", "dvd"];
// let palindrome = function(inputArray) {
//         let count = 0;

//         return inputArray.filter(str => {
//             return str === str.split("").reverse().join("");
//         })
//     }
    
// console.log(palindrome(inputArray));

//IIFE
// let inputArray = ["bus", "civic", "deed", "dvd"];
// (() => {
//         let count = 0;

//         console.log(inputArray.filter(str => {
//             return str === str.split("").reverse().join("");
//         }));
//     })();


// 1.f median of sorted array
// anonymous function
// let inputArray1 = [1, 10, 12, 23, 50];
// let inputArray2 = [3, 16, 19, 35, 49];

// let median = function(inputArray1, inputArray2) {
//     let sortedInputArray1 = inputArray1.sort((a, b) => a-b);
//     let sortedInputArray2 = inputArray2.sort((a, b) => a-b);
    
//     sortedInputArray1 = [...sortedInputArray1, ...sortedInputArray2].sort((a,b) => a - b);
    
//     if(sortedInputArray1.length % 2 === 0) {
//         let a = sortedInputArray1[sortedInputArray1.length / 2];
//         let b = sortedInputArray1[(sortedInputArray1.length / 2) - 1];
//         console.log((a + b) / 2);
//     }
//     else {
//         console.log(sortedInputArray1[(sortedInputArray1.length - 1) / 2]);
//     }
// }

// median(inputArray1, inputArray2);

// IIFE
// let inputArray1 = [1, 10, 12, 23, 50];
// let inputArray2 = [3, 16, 19, 35, 49];

// (() => {
//     let sortedInputArray1 = inputArray1.sort((a, b) => a-b);
//     let sortedInputArray2 = inputArray2.sort((a, b) => a-b);
    
//     sortedInputArray1 = [...sortedInputArray1, ...sortedInputArray2].sort((a,b) => a - b);
    
//     if(sortedInputArray1.length % 2 === 0) {
//         let a = sortedInputArray1[sortedInputArray1.length / 2];
//         let b = sortedInputArray1[(sortedInputArray1.length / 2) - 1];
//         console.log((a + b) / 2);
//     }
//     else {
//         console.log(sortedInputArray1[(sortedInputArray1.length - 1) / 2]);
//     }
// })()

// 1.g. Remove duplicates
// anonymous function 
// let inputArray = ["bus", "civic", "deed", "dvd", "bus"];
// let removeDuplicates = function(inputArray) {
//         let outputArray = [];
//         inputArray.forEach(item => {
//             if (!(outputArray.includes(item))) {
//                 outputArray.push(item);
//             }
//         })

//         console.log(outputArray);
//     }
// removeDuplicates(inputArray);

//IIFE
// let inputArray = ["bus", "civic", "deed", "dvd", "bus"];
// (() => {
//         let outputArray = [];
//         inputArray.forEach(item => {
//             if (!(outputArray.includes(item))) {
//                 outputArray.push(item);
//             }
//         })

//         console.log(outputArray);
//     })()

// 1.f. Rotate array by k times
// anonymous function 
// let inputArray = ["bus", "civic", "deed", "dvd"];
// let k = 2;
// let rotate = function(inputArray, k) {
//         for (let i = 0 ; i < k; i++) {
//             inputArray.splice(0, 0, inputArray.pop());
//         }

//         console.log(inputArray);
//     }
//     rotate(inputArray, k);

// IIFE
// let inputArray = ["bus", "civic", "deed", "dvd"];
// let k = 2;
// (() => {
//         for (let i = 0 ; i < k; i++) {
//             inputArray.splice(0, 0, inputArray.pop());
//         }

//         console.log(inputArray);
//     })();



// 2. a print odd number (arrow function)
// let inputArray = [1,2,3,4,5,6,7,8,9,0];
// let oddNumbers = (inputArray) => {
//     return inputArray.filter(num => num % 2 !== 0);
// }

// console.log(oddNumbers(inputArray));


// 2. b. titlecase convertion (arrow function)

// let inputArray = ["hello", "world", "foo", "bar", "vscode"];
// let titleCase = (inputArray) => {
//     return inputArray.map(str => str[0].toUpperCase() + str.substring(1, str.length).toLowerCase());
// }

// console.log(titleCase(inputArray));

// 2.c sum of all numbers in array (arrow function)
// let inputArray = [1,2,3,4,5,6,7];
// let sum = (inputArray) => {
//     let sum = 0;

//     inputArray.forEach(num => {
//         sum += +num;
//     });

//     return sum;
// }

// console.log(sum(inputArray));

// 2.d prime numbers (arrow function)

// let inputArray = [1,2,3,4,5,6,7];
// let prime = (inputArray) => {
//         let count = 0;

//         return inputArray.filter(num => {
//             for (let i = 2; i < num; i++) {
//                 if (num % i === 0) {
//                     count++;
//                     break;
//                 }
//             }

//             return count === 0;
//         })
//     }
    
// console.log(prime(inputArray));

// 2.e palindrome (arrow function)

let inputArray = ["bus", "civic", "deed", "dvd"];
let palindrome = (inputArray) => {
        let count = 0;

        return inputArray.filter(str => {
            return str === str.split("").reverse().join("");
        })
    }
    
console.log(palindrome(inputArray));



