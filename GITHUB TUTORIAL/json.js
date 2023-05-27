let myResumeObject = {
    "name" : {
        "firstName" : "M Shekhar",
        "lastName" : "Dora"
    },
    "languagesknown" : ["Hindi", "English", "Odia"],
    "Skills" : [{ "Web development" : ["Html", "CSS", "JS", "React", "Node", "Express", "MongoDB"] },
        { "Ios Development" : ["Swift", "Objective C", "SwiftUI", "XCode"] },
        { "Android Developmnt" : ["Kotlin", "Android studio"] }],
    "Workexperience" : [{ "Company" : "Infosys Limited", "yearsofexperience" : 2, "Position" : "Senior Systems Engineer", "Technology" : "IOS / MACOS Development" }]
};
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")
// for loop
console.log("Name : " + myResumeObject.name.firstName + " " + myResumeObject.name.lastName);
console.log("Languages known : ");

for (let i = 0; i < myResumeObject.languagesknown.length; i++) {
    console.log((i + 1) + ". " + myResumeObject.languagesknown[i]);
}
console.log("Skills : ");

for (let i = 0; i < myResumeObject.Skills.length; i++) {
    let skill = myResumeObject.Skills[i];
    console.log("Course : " + Object.keys(skill)[0]);
    let skillValues = Object.values(skill)[0];
    for (let j = 0; j < skillValues.length; j++) {
         console.log((j + 1) + ". " + skillValues[j]);
    }
}

console.log("Work Experience : ");
let exp = myResumeObject.Workexperience;
for (let i = 0; i < exp.length; i++) {
    console.log((i + 1) + ". " + exp[i].Company);
     console.log("Years of Experience : " + exp[i].yearsofexperience);
    console.log("Position : " + exp[i].Position);
    console.log("Technology : " + exp[i].Technology);
}
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")
// for of loop
// console.log("Name : " + myResumeObject.name.firstName + " " + myResumeObject.name.lastName);
// console.log("Languages known : ");
// let index = 0;
// for (let i of myResumeObject.languagesknown) {
//     console.log((index + 1) + ". " + i);
//     index++;
// }

// index = 0;
// console.log("Skills : ");

// for (let i of myResumeObject.Skills) {
//     let skill = i;
//     console.log("Course : " + Object.keys(skill)[0]);
//     let skillValues = Object.values(skill)[0];
//     for (let j of skillValues) {
//          console.log((index + 1) + ". " + j);
//          index++;
//     }
    
//     index = 0;
// }

// console.log("Work Experience : ");
// let exp = myResumeObject.Workexperience;
// for (let i of exp) {
//     console.log((index + 1) + ". " + i.Company);
//      console.log("Years of Experience : " + i.yearsofexperience);
//     console.log("Position : " + i.Position);
//     console.log("Technology : " + i.Technology);
//     index++;
// }

// index = 0;
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")
// forEach:

// console.log("Name : " + myResumeObject.name.firstName + " " + myResumeObject.name.lastName);
// console.log("Languages known : ");
// myResumeObject.languagesknown.forEach((language, index) => {
//     console.log((index + 1) + ". " + language);
// });
// console.log("Skills : ");
// myResumeObject.Skills.forEach(skill => {
//     console.log("Course : " + Object.keys(skill)[0]);
//     Object.values(skill)[0].forEach((language, index) => {
//          console.log((index + 1) + ". " + language);
//     });
    
// });
// console.log("Work Experience : ");
// myResumeObject.Workexperience.forEach((work, index) => {
//     console.log((index + 1) + ". " + work.Company);
//     console.log("Years of Experience : " + Work.yearsofexperience);
//     console.log("Position : " + Work.Position);
//     console.log("Technology : " + Work.Technology);
// });

console.log("----------------------------------------------------------------------------------------------------------------------------------------------");
// for in loop

// console.log("Name : " + myResumeObject.name.firstName + " " + myResumeObject.name.lastName);
// console.log("Languages known : ");
// let index = 0;
// for (let i in myResumeObject.languagesknown) {
//     console.log((i + 1) + ". " + myResumeObject.languagesknown[i]);
// }

// console.log("Skills : ");

// for (let i in myResumeObject.Skills) {
//     let skill = myResumeObject.Skills[i];
//     console.log("Course : " + Object.keys(skill)[0]);
//     let skillValues = Object.values(skill)[0];
//     for (let j in skillValues) {
//          console.log((j + 1) + ". " + skillValues[j]);
//     }
// }

// console.log("Work Experience : ");
// let exp = myResumeObject.Workexperience;
// for (let i in exp) {
//     console.log((index + 1) + ". " + exp[i].Company);
//      console.log("Years of Experience : " + exp[i].yearsofexperience);
//     console.log("Position : " + exp[i].Position);
//     console.log("Technology : " + exp[i].Technology);
// }
