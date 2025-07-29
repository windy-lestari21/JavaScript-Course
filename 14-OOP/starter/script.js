'use strict';
/////////////////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Not a method, but a function
  // this.calcAge = function () {
  //   console.log(2027 - this.birthYear);
};
const jonas = new Person('John', 1990);
console.log(jonas);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically returns {}

const matilda = new Person('Matilda', 1995);
const jack = new Person('Jack', 1998);
console.log(matilda, jack);

console.log(jonas instanceof Person);
Person.hey = function () {
  console.log('Hey there!');
};

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2027 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new array === [];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.createElement('h1');
console.dir(x => x + 1);

//////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

// class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype
  calcAge() {
    console.log(2026 - this.birthYear);
  }

  greet() {
    console.log(`Hello, ${this.firstName}`);
  }

  get age() {
    return 2026 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there!');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

///////////////////////////////
// Setters and Getters
////////////////////////////////
// const account = {
//   owner: 'Jonas',
//   movements: [200, 450, -400, 3000],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest); // 3000

// account.latest = 50;
// console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2026 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2003;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.name = 'Sarah';
sarah.birthYear = 1979;
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; // in km/h
  }

  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
