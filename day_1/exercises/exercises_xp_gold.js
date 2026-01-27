// ===== Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift(); 
console.log(people);
people[people.indexOf("James")] = "Jason";
console.log(people);
people.push("Ali"); // replace "Ali" with your name
console.log(people); // ["Mary", "Devon", "Jason", "Ali"]
console.log(people.indexOf("Mary")); // 0
const peopleCopy = people.slice(); // copies the entire array
console.log(peopleCopy); // ["Mary", "Devon", "Jason", "Ali"]
const partialCopy = people.slice(1, people.length - 1);
console.log(partialCopy); // ["Devon", "Jason"]
console.log(people.indexOf("Foo")); // -1
const last = people[people.length - 1];
console.log(last); // "Ali"
// =========================Part II - Loops=================

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
for (const person of people) {
  console.log(person);
}
for (const person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}

// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...