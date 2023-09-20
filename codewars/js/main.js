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