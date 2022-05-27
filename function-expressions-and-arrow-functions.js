// Function declaration
function ratingAsText(park) {
    console.log("This is a function declaration.");
    return park.rating > 4 ? "Excellent!" : "Good";
  }
  
  // Function expression
  const ratingAsTextNamed = function ratingToWord(park) {
    console.log("This is a function expression that has a name.");
    return park.rating > 4 ? "Excellent!" : "Good";
  };
  
  // Anonymous function expression
//   const ratingAsTextAnonymous = function (park) {
//     console.log("This is an anonymous function that does not have a name.");
//     return park.rating > 4 ? "Excellent!" : "Good";
//   };




  function ratingAsText (park) {
      console.log("This is a function declaration.");
      return park.rating > 4 ? "Excellent!" : "Good";
    }

    const ratingsAsTextNamed = function ratingToWord(park) {
          console.log("This is a function expression that has a name.");
          return park.rating > 4 ? "Excellent!" : "Good";
      }

    const ratingAsTextAnonymous = function (park) {
          console.log("This is a anonymous function that does not have a name.");
          return park.rating > 4 ? "Excellent!" : "Good";
      }
  
  
//   Write this function declaration in the form of a function expression 
//   and as an anonymous function expression.

  
  function ratingAsText(park) {
    console.log("This is a function declaration.");
    return park.rating > 4 ? "Excellent!" : "Good";
   }

   const functionAsDeclaration = function ratingAsText (park) {
       console.log("This is a function expression");
       return park.rating > 4 ? "Excellent!" : "Good";
   }

   const anonymousFunction = function (park) {
       console.log("This is a anonymous function");
       return park.ration > 4 ? "Excellent!" : "Good";
   }

//    Write this is the form of an arrow function

const getLocation = function(location){
    return location.state
    }

    const getStatelocation = (location) => {
        return location.state
    }

    const getStateLocation = location => location.state