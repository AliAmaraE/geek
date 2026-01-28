// ====== Daily Challenge 1
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
replaceNotBad("This dinner is not that bad ! You cook well");

replaceNotBad("This movie is not so bad !");

replaceNotBad("This dinner is bad !");


// ====== Daily Challenge 2
let stars = "";

for (let i = 1; i <= 6; i++) {
  stars = stars + "* ";
  console.log(stars);
}


// ====== Daily Challenge 3
