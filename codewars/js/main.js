// codewars class 34 (none for 33)


//Task 9/20/23
// There are pillars near the road. The distance between the pillars is 
// the same and the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

//Solution

function pillars(numPill, dist, width) {
    // Input validation
    if (numPill  < 2){
      return 0; // Return 0 for invalid inputs
    }
    // Convert distance into centimeters
    let distCenti = dist * 100;
    // Multiply distance between all pillars
    let allDistance = distCenti * (numPill - 1);
    let widthAllMinus2 = width * (numPill - 2);
    let finalAnswer = allDistance + widthAllMinus2;
    return finalAnswer;
  }


  //Task 9/20/23
//The Story:
//Bob is working as a bus driver. However, he has become extremely popular 
//amongst the city's residents. With so many passengers wanting to get 
//aboard his bus, he sometimes has to face the problem of not enough space 
//left on the bus! He wants you to write a simple program telling him if 
//he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.


//Solution

function enough(cap, on, wait){
    if (on < cap){
      if (on + wait <= cap){
        return 0;
      }else{
        return (wait - (cap - on));
      }
    }
  }