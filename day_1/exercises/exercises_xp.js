// ===== Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift(); 
console.log(people);
people[people.indexOf("James")] = "Jason";
console.log(people);
people.push("Ali"); 
console.log(people); 
console.log(people.indexOf("Mary")); 
console.log(peopleCopy); 
const partialCopy = people.slice(1, people.length - 1);
console.log(partialCopy); 
console.log(people.indexOf("Foo")); 
const last = people[people.length - 1];
console.log(last); 
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