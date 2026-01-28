// ===== Exercise 1
// Person 1 object
let person1 = {
  fullName: "Ali Amara",
  mass: 70,      // kg
  height: 1.75,  // meters

  // Method to calculate BMI
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

// Person 2 object
let person2 = {
  fullName: "Sara Ben",
  mass: 85,      // kg
  height: 1.70,  // meters

  // Method to calculate BMI
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

// Function to compare BMI of two people
function compareBMI(personA, personB) {
  let bmiA = personA.calcBMI();
  let bmiB = personB.calcBMI();

  if (bmiA > bmiB) {
    console.log(personA.fullName + " has the higher BMI");
  } else if (bmiB > bmiA) {
    console.log(personB.fullName + " has the higher BMI");
  } else {
    console.log("Both have the same BMI");
  }
}

// Call the function
compareBMI(person1, person2);


// ===== Exercise 2
function findAvg(gradesList) {
  let sum = 0;

  // Calculate sum
  for (let i = 0; i < gradesList.length; i++) {
    sum = sum + gradesList[i];
  }

  // Calculate average
  let average = sum / gradesList.length;

  console.log("Average:", average);

  // Check pass or fail
  if (average >= 65) {
    console.log("You passed");
  } else {
    console.log("You failed and must repeat the course");
  }
}

// Example call
findAvg([70, 60, 80, 90]);


// ===== Exercise 3
function replaceNotBad(sentence) {
  let wordNot = sentence.indexOf("not");
  let wordBad = sentence.indexOf("bad");

  if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    let result =
      sentence.slice(0, wordNot) +
      "good" +
      sentence.slice(wordBad + 3);

    console.log("Your string is :", "'" + sentence + "'");
    console.log("--> the result is :", "'" + result + "'");
  } else {
    console.log("Your string is :", "'" + sentence + "'");
    console.log("--> the result is :", "'" + sentence + "'");
  }
}


// ===== Exercise 4

// ===== Exercise ...