// ===== Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift(); 
console.log(people);
people[people.indexOf("James")] = "Jason";
console.log("1-------------------------------"); 
console.log(people);
people.push("Ali"); 
console.log("2-------------------------------");
console.log(people);
console.log("3-------------------------------");
console.log(people.indexOf("Mary")); 
const partialCopy = people.slice(1, people.length - 1);
console.log("4-------------------------------");
console.log(partialCopy); 
console.log("5-------------------------------");
console.log(people.indexOf("Foo")); 
console.log("6-------------------------------");
const last = people[people.length - 1];
console.log(last); 
// =========================Part II - Loops=================
console.log("7-------------------------------");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
console.log("8-------------------------------");
for (const person of people) {
  console.log(person);
}
console.log("9-------------------------------");
for (const person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}
console.log("10-------------------------------");


// ===== Exercise 2
const colors = ["blue", "red", "black", "green", "purple"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}
console.log("1-------------------------------");
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}


// ===== Exercise 3
let number = Number(prompt("Enter a number:"));

while (isNaN(number) || number < 10) {
  number = Number(prompt("Invalid or too small. Enter a number >= 10:"));
}
console.log("You entered:", number);

// ===== Exercise 4
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
console.log("1-------------------------------");
console.log(building.numberOfFloors);
console.log("2-------------------------------");
console.log(
  building.numberOfAptByFloor.firstFloor +
  building.numberOfAptByFloor.thirdFloor
);
console.log("3-------------------------------");
const secondTenant = building.nameOfTenants[1];
const rooms = building.numberOfRoomsAndRent.dan[0];

console.log(secondTenant, rooms);
console.log("4-------------------------------");
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan);


// ===== Exercise ...