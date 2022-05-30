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

// Practice 5) Practice the map method

let mappedParks = parks.map((park) => park.name)
console.log(mappedParks)

// Practice 6) Using the same data create a function that return only the park names without using
// the map method,

function mapParks (parks) {
let result = []

    for (let i = 0; i < parks.length; i++) {
        result.push(parks[i].name)
    }

return result
}

console.log(mapParks(parks ))

// Practice 7) Practice using the some method

let ratingsCheck = parks.some((park) => park.rating > 8)
console.log(ratingsCheck)

//Practice 8) Check if there are rating below 5 without using the some method.

function belowFive (parks) {

    for (let i = 0; i < parks.length; i++) {
        return (parks[i].rating > 3) 
    }
}

console.log(belowFive(parks))

// Practice 9)  Practice the every method

let checkEveryParkRating = parks.every((park) => park.rating > 2)
console.log(checkEveryParkRating)

//Practice 10) check if every rating is about 2 without using the every method

function EveryRatingGreater (parks,rating) {
    let truthHolder = false;

    for(let i = 0; i < parks.length; i++) {
    let parkRating = parks[i].rating;
        if (parkRating > rating) truthHolder = true;
}
return truthHolder;
}

console.log(EveryRatingGreater(parks, 5))

let symbol = "<";

console.log(symbol)
