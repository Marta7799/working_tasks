// const obj = {
//   foo() {
//     console.log(this);
//   }
// }

// obj.foo()

// const foo = () => console.log(this)

// foo()

// const obj1 = {
//   foo() {
//     console.log(this)
//   }
// }

// function foo() {
//   console.log(this)
// }

// const obj2 = {
//   foo: foo
// }

// obj1.foo()
// obj2.foo()

//const obj = {
// foo: () => console.log(this),
//};

//obj.foo();

// const hotel = {
//   username: 'Resort',
//   showThis() {
//     const foo = () => console.log(this)
//     foo()
//   }
// }

// hotel.showThis()

// const name = "Mateusz";
// const nickname = "Daria_m";
// const currency = "PLN";
// const iWantToHaveAHouseOnMaledivesToday = true;
// const hotel = 5;

// const foo = (arg) => console.log(arg);

// const getInfo = (name, nickname, currency, isTrue) => {
//   console.log(`${name} - ${nickname} - ${currency}`);
// };

// getInfo(name, nickname, currency);

// // // -----

// const user = {
//   name: "Mateusz",
//   nickname: "Daria_m",
//   currency: "PLN",
//   hotel: 5,

//   getInfo() {
//     console.log(`${this.name} - ${this.nickname} - ${this.currency}`);
//   },
// };

// user.getInfo();

// const anotherUser = Object.create(user);
// anotherUser.bankAmount = 1000;

// console.log(user);
// console.log(anotherUser);

// const animal = {
//   legs: 4,
// }

// const mammal = Object.create(animal)
// mammal.isMammal = true;

// const dog = Object.create(mammal)
// dog.woof = () => console.log('woof')

// console.log(dog)

//class User {
//  #username = "Marcin";
//  age = 21;
// isAlive = true;

// constructor({ username, age }) {
//  this.#username = username;
//  this.age = age;

// if (age) {
//   this.age = age;
// }

// this.age = age || this.age;
// }

// getUsername = () => {
//   return this.#username;
// };

// getUsernameAndAge = () => {
//   this.#setUsername();
//   return `Hey, tutaj ${this.#username}, mam ${this.age} lat. Witam!`;
// };

// #setUsername = (user) => {
// Request na backend do sprawdzenia czy taki user istnieje
//  this.#username = user;
//};

// sayHello = () => {
// console.log("Hello");
//};
//}

//const firstUser = new User({
// username: "Mariusz",
//age: 32,
//});

//const secondUser = new User({
// username: "Wojciech",
//});

// firstUser.#username = 'Tomasz'
// firstUser.#setUsername('Arkadiusz')

// console.log(firstUser.getUsernameAndAge())
// console.log(firstUser.getUsername())
// console.log(firstUser.#username)

// const user1 = new User();
// const marcinUser = new User();
// const marcinUser = {
//   username: 'Marcin',

//   sayHello() {
//     console.log('Hello')
//   }
// }

// console.log(user1)
// console.log(marcinUser)

// user1.sayHello()
// console.log(marcinUser.username)

// class Person {
//   #email;
//   static Roles = {
//     ADMIN: 'admin',
//     USER: 'user',
//   }
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     // return `This is ${this.email}, hello to ${email}`
//     return Person.#takenEmails.includes(email)
//   }

//   constructor({ email }) {
//     this.#email = email;
//     Person.#takenEmails.push(email)
//   }
//   get email() {
//     return this.#email
//   }
//   set email(newEmail) {
//     if (newEmail.indexOf('@') > -1) {
//       this.#email = newEmail
//     } else {
//       console.log('lol nope')
//     }
//   }
// }

// const person = new Person({
//   email: 'adrian@goit.pl'
// });
// console.log(Person.isEmailTaken('adrian@gmail.com'))
// console.log(Person.isEmailTaken('adrian@goit.pl'))

// person.email = 'abba'
// person.email = 'abba@gmail.com'

// Person.Roles.USER = 5

// console.log(person.#email)
// console.log(person)
// console.log(person.email)
// console.log(Person.Roles.USER)

// console.log()
// class User {
//   #username = "Marcin";
//   age = 21;
//   isAlive = true;

//   constructor({ username, age }) {
//     this.#username = username;
//     this.age = age;

//     // if (age) {
//     //   this.age = age;
//     // }

//     this.age = age || this.age;
//   }

//   getUsername = () => {
//     return this.#username;
//   };

//   getUsernameAndAge = () => {
//     this.#setUsername();
//     return `Hey, tutaj ${this.#username}, mam ${this.age} lat. Witam!`;
//   };

//   #setUsername = (user) => {
//     // Request na backend do sprawdzenia czy taki user istnieje
//     this.#username = user;
//   };

//   sayHello = () => {
//     console.log("Hello");
//   };
// }

// const firstUser = new User({
//   username: "Mariusz",
//   age: 32,
// });

// const secondUser = new User({
//   username: "Wojciech",
// });

// firstUser.#username = 'Tomasz'
// firstUser.#setUsername('Arkadiusz')

// console.log(firstUser.getUsernameAndAge())
// console.log(firstUser.getUsername())
// console.log(firstUser.#username)

// const user1 = new User();
// const marcinUser = new User();
// const marcinUser = {
//   username: 'Marcin',

//   sayHello() {
//     console.log('Hello')
//   }
// }

// console.log(user1)
// console.log(marcinUser)

// user1.sayHello()
// console.log(marcinUser.username)

// class Person {
//   #email;
//   static Roles = {
//     ADMIN: 'admin',
//     USER: 'user',
//   }
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     // return `This is ${this.email}, hello to ${email}`
//     return Person.#takenEmails.includes(email)
//   }

//   constructor({ email }) {
//     this.#email = email;
//     Person.#takenEmails.push(email)
//   }
//   get email() {
//     return this.#email
//   }
//   set email(newEmail) {
//     if (newEmail.indexOf('@') > -1) {
//       this.#email = newEmail
//     } else {
//       console.log('lol nope')
//     }
//   }
// }

// const person = new Person({
//   email: 'adrian@goit.pl'
// });
// console.log(Person.isEmailTaken('adrian@gmail.com'))
// console.log(Person.isEmailTaken('adrian@goit.pl'))

// person.email = 'abba'
// person.email = 'abba@gmail.com'

// Person.Roles.USER = 5

// console.log(person.#email)
// console.log(person)
// console.log(person.email)
// console.log(Person.Roles.USER)

// console.log()

// class Animal {
//   legs;
//   #private1 = 1;

//   constructor({ legs }) {
//     this.legs = legs;
//   }
// }

// class Dog extends Animal {
//   #private2 = 2;
//   // woof = () => console.log('woof')

//   woof() {
//     console.log("woof");
//   }

//   constructor({ legs }) {
//     super({ legs });
//   }
// }

// class Corgi extends Dog {
//   #private3 = 3;
//   isAwesome = true;
//   age;

//   woof = () => {
//     console.log("not-woof");
//     super.woof();
//   };

//   constructor({ legs, age }) {
//     super({ legs });
//     this.age = age;
//     // this.legs = legs
//     this.woof();
//     // console.log(this.#private3)
//   }
// }

// const animal = new Animal({ legs: 8 });
// // console.log(animal)

// const corgi = new Corgi({ legs: 4, age: 15 });
// console.log(corgi);
