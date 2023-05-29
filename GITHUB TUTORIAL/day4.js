// 1. 

// let obj1 = { name: "Person 1", age: 5 };
// let obj2 = { age: 5, name: "Person 1" };

// if ((obj1.age = obj2.age) && (obj1.age = obj2.age)) {
//     console.log("Equal");
// }
// else {
//     console.log("Not Equal")
// }


// 2. Flags

async function fetchData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    // console.log(response);
    const jsonData = await response.json();

    return jsonData;
  }

(async () => {
    let result = await fetchData();
    console.log("All Flags are mentioned below")
    result.forEach(country => {
        console.log(`${country.flag} => ${country.flags.png}`);
    });
  })();

  // 3. Country, region, subregion , population

  (async () => {
    let result = await fetchData();
    console.log("All Flags are mentioned below")
    result.forEach(country => {
        console.log(`Country : ${country.name.common}, Region : ${country.region}, Sub-Region : ${country.subregion}, Population : ${country.population}`);
    });
  })();