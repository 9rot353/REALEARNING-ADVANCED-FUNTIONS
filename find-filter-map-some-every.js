//Practice 1) Use the find method to find a park that matches a name.
//data name
const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];

  let found = parks.find((park) => (park.rating === 4.2));

  console.log(found)

//Practice 2) Using the same data find the school with the name "Indiana Dunes" with out the use of array methods
//This is the alternative of using the find()  array method.
function findSchoolName (parks) {
    let matchingSchool = null;

    for(let i =0 ; i < parks.length ; i++) {
        let park = parks[i].name
        if (park === "Grand Canyon") return matchingSchool = park;
    }
}

console.log(findSchoolName(parks))

//Practice 3) Practice the filter method

let filteredPark = parks.filter((park) => park.rating <= 4.5);
console.log(filteredPark)

// let result = parks.filter((park) => park.rating >= 4.5);
// console.log(result); 


//Practice 4) Using the same data create a function that filters for schools that have a rating
//less than or equal to 4.5 

function parksFiltered (parks) {
    let filteredParks = []

    for (let i =0; i < parks.length ;i++) {
        let park = parks[i].rating
        if (park <= 5) {
            filteredParks.push(parks[i])
        }
    }
    return filteredParks
}
console.log( parksFiltered(parks))

