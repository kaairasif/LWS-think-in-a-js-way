// let f = function Person() {};
// console.dir(f);

// Example 1 : Master Object creation
// =====================================================================================//
// Object.prototype.asif = function () {
//   console.log("I am asif");
// };

// let p = {};
// p.asif();

// Example 2 : Prototype Inheritance
// =====================================================================================//

// // parent class
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// // sub class
// function Cricketer(name, age, type, country, gender) {
//   Person.call(this);
//   this.name = name;
//   this.age = age;
//   this.type = type;
//   this.country = country;
//   this.gender = gender;
// }

// Person.prototype = {
//   eat: function () {
//     console.log(`${this.name} is eating`);
//   },
// };

// Cricketer.prototype = Object.create(Person.prototype);
// Cricketer.prototype.constructor = Cricketer;
// Cricketer.prototype.play = function () {
//   console.log(`${this.name} is playing`);
// };

// let sakib = new Cricketer("Sakib", 35, "All rounder", "Bangladesh", "Male");

// console.log(sakib.eat());
// console.log(sakib.play());

// Example 3 : Class conversion
// =====================================================================================//

// parent class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// // sub class
// class Cricketer extends Person {
//   constructor(name, age, type, country) {
//     super(name, age);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
//   }
//   play() {
//     console.log(`${this.name} is playing`);
//   }
// }

// let sakib = new Cricketer("Sakib", 35, "All rounder", "Bangladesh");
// // console.log(sakib.name);
// sakib.eat();

// let tamim = new Person("Tamim", 35);
// console.log(tamim.eat());

// Example 4 : Class- Getter & Setter
// =====================================================================================//

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }

//   // getter
//   get setName() {
//     return "abc";
//   }

//   // setter
//   set setName(name) {
//     return (this.name = name);
//   }
// }

// let sakib = new Person("Sakib", 35);

// sakib.setName = "Tamim";
// console.log(sakib.name);

// Example 5 : Class- Static method
// =====================================================================================//

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }
//   static isEqualAge(cricketer1, cricketer2) {
//     return cricketer1.age === cricketer2.age;
//   }
// }

// let sakib = new Person("Sakib", 35);
// let tamim = new Person("Tamim", 35);

// const ageCheck = Person.isEqualAge(sakib, tamim);

// console.log(ageCheck);

//////////////////////////////////////////////////////////////////////////////////////////
// Example 6 : Class- Polymorphism
//////////////////////////////////////////////////////////////////////////////////////////

//parent class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }
//   play() {
//     console.log(`${this.name} is playing`);
//   }
// }

// // sub class
// class Cricketer extends Person {
//   constructor(name, age, type, country) {
//     super(name, age);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
//   }
//   play() {
//     super.play();
//     console.log(`${this.name} is playing cricket`);
//   }
// }

// let sakib = new Cricketer("Sakib", 35, "All rounder", "Bangladesh");

// sakib.play();
