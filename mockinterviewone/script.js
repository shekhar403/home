// // const arr = [5,6,7,8,9];
// // const sumOut = arr.reduce((sum, inp) => {
// //     return sum + inp;
// // })
// // const mulOut = arr.reduce((mul, inp) => {
// //     return mul * inp;
// // })

// // console.log(sumOut);
// // console.log(mulOut);


// const Hero = {
//     name: "Hulk",
//     height: 100,
//     weight: 1000,
//     power: 20,
//     weapon: "Hulk Smash",

//     attack: () => {
//         if (Hero.power <= 0) {
//             console.log("Attack Not Possible");
//             console.log("I need sleep");
//             Hero.sleep();
//         }
//         else {
//             console.log(`I am attacking with ${Hero.weapon}`);
//             Hero.power -= 10;
//             console.log(`Remaining Power : ${Hero.power}`);
//         }
//     },

//     sleep: () => {
//         console.log(`I am Sleeping`);
//         Hero.power += 20;
//         console.log(`Remaining Power : ${Hero.power}`);
//     },

//     changeWeapon: (userWeapon) => {
//         Hero.weapon = userWeapon;
//         console.log(`Weapon updated: ${Hero.weapon}`);
//     }
// }


// Hero.attack();
// Hero.attack();
// Hero.attack();
// Hero.sleep();
// Hero.changeWeapon("Spider Web");

import { myFunc, myFunc2 } from "./a.js";

myFunc();
myFunc2();