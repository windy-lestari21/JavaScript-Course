// let js = "amazing";
// if (js == "amazing") alert("javascript is not FUN");

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log("Is");

// let firstname = "Jonas";
// console.log(firstname);
// console.log(firstname);

// let jonas_matilda = "JM";

// let myFirstJob = "coder";
// let myCurrentJob = "test";

// console.log(myFirstJob);
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof "jonas");

// javascriptIsFun = "yes!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2025;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// var job = "programer";
// job = "teacher";

// lastName = "John";
// console.log(lastName);

// OPERATORS
// const now = 2025;
// const ageJonas = now - 1999;
// const ageSarah = now - 2000;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2);

// const firstName = "Jonas";
// const lastName = "Blue";
// console.log(firstName + "" + lastName);

// // Assignment operators
// // let x = 10 + 5;
// // x += 10;
// // x += 4;
// // x++;
// // x--;
// // console.log(x);

// // comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1999 > now - 2022);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x =10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK 😀

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

////////////////////////////////////
// Type Conversion and Coercion

// const firstName = "John";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2025;

// const john =
//   "I'm " + firstName + ", a " + (year - birthYear) + "years old " + job + "!";
// console.log(john);

// const johnNew = "I'm ' ${firstName}, a ${year - birthYear} year old ${job}!";
// console.log(johnNew);

// console.log("Jusr a regular string...");

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String
// multiple
// lines`);

// TAKING DECISION: if/ else statements
// /////////////////

// const age = 19;

// if (age >= 18) {
//   console.log("Sarah can start driving license ��");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//Coding challenge 2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
// }

// CONVERSION AND COERCION
// type of conversion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("John"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// truthy and falsy values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("John"));
// console.log(Boolean());

// const money = 100;
// if (money) {
//   console.log("You have some money!");
// } else {
//   console.log("You have no money :(");
// }

// let height = 0;
// if (height) {
//   console.log("Halo, apa kabar?");
// } else {
//   console.log("Tinggal di mana-mana ini?");
// }

// const age = 18;
// if (age === 18) console.log("You just became an adult! (string)");

// if (age == 18) console.log("You just became an adult (loose)!");

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 22 === 23 -> FALSE
//   console.log("Cool! 23 is an amzaing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// BOOLEAN-OPERATOR

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("You can drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("You can drive, but be careful!");
// } else {
//   console.log("You should stay home and relax!");
// }

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win!");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win!");
// } else if (scoreKoalas === scoreDolphins) {
//   console.log("It's a draw!");
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win!");
// } else if (
//   scoreKoalas === scoreDolphins &&
//   scoreKoalas >= 100 &&
//   scoreDolphins >= 100
// ) {
//   console.log("It's a draw!");
// } else {
//   console.log("No one wins the trophy!:money_mouth_face:");
// }

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Monday is a cool day!");
//     console.log("Go to school.");
//     break;

//   case "tuesday":
//     console.log("prepare theory");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Go to work!");
//   case "friday":
//     console.log("Have fun!");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Sleep tight!");
//     break;
//   default:
//     console.log("Invalid day");
// }

// if (day === "monday") {
//   console.log("Monday is a cool day!");
//   console.log("Go to school.");
// } else if (day === "tuesday") {
//   console.log("prepare theory");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Go to work!");
// } else if (day === "friday") {
//   console.log("Have fun!");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Sleep tight!");
// } else console.log("Invalid day");

// statement and ekspression

const age = 15;
// age >= 18
//   ? console.log("I like to drink wine ")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log("I like to drink {age >= 18 ? 'wine : 'water'}");
