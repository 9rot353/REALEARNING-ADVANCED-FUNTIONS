const discountedPrice = (discount) => {
    return (price) => price * discount;
  }

  let tenPercentOff= discountedPrice(0.5)

  let finalPillowPrice = tenPercentOff(75)

  console.log(finalPillowPrice)

//   Why does this work? 
// Before we get into the explaination of why this works, let us first remember the definition of a
//high order function//
//A high order function either takes in a function as a arguement or issues a function in it's return.
//Now, why/how does this work//
//on line 1 the logic is established, on line 5 the first augument of discountedPrice is filled in
//on line 7 the the second arguement in discoundtedPrice is established//
//Once they are both feild the logic of the original discountPrice function is able to run to completion

//practicing the forEach() method//

let parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];

  let parkNames = (park) => console.log(park.name)

  console.log(parks.forEach(parkNames))