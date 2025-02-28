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

// BOOLEAN
