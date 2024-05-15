// Example 1 : Return object from a function
// =======================================================================//

// function Person(name, age) {
//   let person = {};
//   person.name = name;
//   person.age = age;

//   person.eat = function () {
//     console.log(`Person is eating`);
//   };
//   person.sleep = function () {
//     console.log(`Person is sleeping`);
//   };

//   return person;
// }

// Example 2 : Return object from a function : Object count optimization
// =======================================================================//
// const personMethods = {
//   eat() {
//     console.log(`Person is eating`);
//   },
//   sleep() {
//     console.log(`Person is sleeping`);
//   },
//   play() {
//     console.log(`Person is playing`);
//   },
// };
// function Person(name, age) {
//   let person = {};
//   person.name = name;
//   person.age = age;

//   person.eat = personMethods.eat;
//   person.sleep = personMethods.sleep;
//   person.play = personMethods.play;
//   return person;
// }

// const sakib = Person("sakib", 35);
// console.log("🚀 ~ file: script.js:17 ~ sakib:", sakib);
// const tamim = Person("tamim", 35);
// console.log("🚀 ~ file: script.js:19 ~ tamim:", tamim);

// Example 3 : Object.create() introduction
// =======================================================================//

// const captain = {
//   name: "Masrafi",
//   age: 36,
//   country: "Bangladesh",
// };

// const player = Object.create(captain);
// console.log("🚀 ~ file: script.js:63 ~ player:", player);

// Example 4 : Prototype introduction
// =======================================================================//

// function test() {}
// console.dir(test.prototype);

// function Person(name, age) {
//   //   let person = Object.create(Person.prototype);
//   this.name = name;
//   this.age = age;
//   //   return person;
// }

// Person.prototype = {
//   eat() {
//     console.log(`Person is eating`);
//   },
//   sleep() {
//     console.log(`Person is sleeping`);
//   },
//   play() {
//     console.log(`Person is playing`);
//   },
// };

// const sakib = new Person("sakib", 35);

// sakib.play();

// Example 5 : Class conversion
// =======================================================================//

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`Person is eating`);
//   }
//   sleep() {
//     console.log(`Person is sleeping`);
//   }
//   play() {
//     console.log(`Person is playing`);
//   }
// }

// const sakib = new Person("sakib", 35);

// sakib.play();

// Example 5 : Array().prototype
// =======================================================================//

// let persons = [];
// let persons = new Array();
// console.dir(persons);

let str = { country: "bangladesh" };
console.dir(str);
