// Before
// const hello = (name) => {
//     return `Hello ${name}`
// }

// const goodbye = (name, surname) => {
//     return `Goodbye ${name} - ${surname}`
// }

// const sayHello = (name, callback) => {
//     console.log(callback(name))
// }

// sayHello('BGal', hello)
// sayHello('Asia', goodbye)

//After
// const hello = (name) => {
//     return `Hello ${name}`
// }

// const goodbye = (name, surname) => {
//     return `Goodbye ${name} - ${surname}`
// }

// const sayHello = (isHello, name, surname) => {
//     if (isHello) {
//         const result = hello(name);
//         console.log(result)
//     } else {
//         const result = goodbye(name, surname)
//         console.log(result)
//     }
// }

// sayHello(true, 'BGal')
// sayHello(false, 'Asia', 'Dobro')

// const select = document.querySelector('.pizza-select');
// const select2 = document.querySelector('.pizza-select2');
// const select3 = document.querySelector('.pizza-select3');

// // First
// select.addEventListener('change', (event) => {
//     console.log(event.target)
// })
// select2.addEventListener('change', (event) => {
//     console.log(event.target)
// })
// select3.addEventListener('change', (event) => {
//     console.log(event.target)
//     handleChange(event, 15, 'abbas')
// })

// // Second
// const handleChange = (event) => {
//     console.log(event.target)
// }

// select.addEventListener('change', handleChange)
// select2.addEventListener('change', handleChange)
// select3.addEventListener('change', handleChange)

// const sum = (array) => {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
//         sum += current;
//     }

//     return sum;
// }

// const array = [1, 3, 5, 7, 9, 100];

// console.time('Function 1')
// const result = sum(array);
// console.timeEnd('Function 1')

// console.time('Function 2')
// const reduceResult = array.reduce((acc, number) => {
//     return acc + number;
// }, {})
// console.timeEnd('Function 2')

// console.log(result)
// console.log(reduceResult)

// const cars = ['BMW', 'Hyundai', 'Skoda', 'BMW', 'BMW', 'VW', 'Audi', 'Audi', 'Skoda'];

// const carsSorted = cars.reduce((acc, curr) => {
//   // if (acc[curr]) ...
//   if (curr in acc) {
//     acc[curr]++
//   } else {
//     acc[curr] = 1
//   }

//   return acc;
// }, {})

// console.log(carsSorted)

// .map -> nową tablicę
// .forEach -> działać na obecnej

// const textOutput = document.querySelector('.text-output')
// const html = `<span>Hello</span>`

// textOutput.innerHTML += html;
// textOutput.append(html)

// console.log(textOutput)

// 1
// this wskazuje na obiekt/klasę -> JEST OK
// 2
// this wskazuje na coś innego -> use .bind

// for / do-while / while
// while -> 0.1%
// do-while -> 1.9%
// for -> 98%

// let weight = 0;

// for (let i = 0; weight <= 10; i++) {
//   weight++;
// }

// do {
//   zrób zapytanie do backendu, jeśli backend zwróci "tutaj masz 100"
//   "jak chcesz reszte to strona 2"
//   -> pytamy raz jeszcze o strone 2
// } while()

// const functionMyAwesome = () => {}

// const cat = {
//   lives: 9,
//   // jumps: () => {}
//   jumps() {
//     // some() {}
//     some: () => {}
//   }
// }

// const button = document.querySelector('.goit')

// const handler = () => {
//   // console.log(this)
//   // console.log('------------')
//   userObj.showUser()
//   userObj.showUserFunc()
// }

// function handlerFunc() {
//   // console.log(this);
//   userObj.showUser()
//   userObj.showUserFunc()
// }

// const userObj = {
//   name: 'Asia',
//   showUserFunc() {
//     console.log(`Func: ${this.name}`)
//   },
//   showUser: () => {
//     console.log(`Arrow: ${this.name}`)
//   }
// }

// const array = [1, 2, 3, 4, 5]

// array.map((number) => {

// })

// button.addEventListener('click', handler)

// button.addEventListener('click', handlerFunc)

// const user = {
//   username: 'Asia',
//   showName() {

//   }
// }

const button = document.querySelector(".goit");

button.addEventListener("click", (event) => {
  console.log({
    currentTarget: event.currentTarget,
    value: event.currentTarget.value,
  });
});

const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log({
    currentTarget: event.currentTarget,
    value: event.currentTarget.value,
    elements: event.currentTarget.elements,
    username: event.currentTarget.elements[0].value,
    target: event.target,
  });
});

const textInput = document.querySelector(".text-input");

textInput.addEventListener("input", (event) => {
  console.log({
    currentTarget: event.currentTarget,
    value: event.currentTarget.value,
  });
});
