// {
//     username: "Mango",
//     age: 2
// }

// {
//     "username": "Mango",
//     "age": 2
// }

// const data = JSON.parse("Welcome to the future!")

// // ----
// const user = {
//     username: "Mango",
//     showName() {
//         console.log(this.username)
//     }
// }

// const json = JSON.stringify(user)
// console.log(json)

//console.log("Before");

// setTimeout(() => {
//     console.log('Inside - 3000')
// }, 3000)

// setInterval(() => {
//     console.log('Interval!')
// }, 2000)

// console.log('After')

// const callback = (text) => {
//   console.log(text);
//   console.log("Inside - 1000");
// };

// setTimeout(callback, 1000, "some text");

// setTimeout(() => {
//     console.log('2')
// }, 2)

// setTimeout(() => {
//     console.log('1')
// }, 1)

// const timerId = setTimeout(() => {
//   console.log("Inside - 3000");
// }, 3000);

// console.log(timerId);

// clearTimeout(timerId);

// const date = new Date(0);
// const date2 = new Date(60000);
// const date3 = new Date();

// const date = new Date("March 16, 2030");
// const date2 = new Date("March 16, 2030 14:24:55");

// console.log(date);
// console.log(date2);

// // const date3 = new Date(2030, 2, 16, 14, 25, 3, 0)
// const date3 = new Date(2030, 2, 16);
// console.log(date3);

// const date = new Date();

// console.log(date.toString());
// console.log(date.toTimeString());
// console.log(date.toLocaleTimeString());
// console.log(date.toUTCString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());
// console.log(date.getTime());

// //zegar
// setInterval(() => {
//   console.log(new Date().toLocaleString());
// }, 1000);

// setInterval(() => {
//   console.clear();
//   console.log(new Date().toLocaleString());
// }, 1000);

//const date = new Date();
// setInterval(() => {
//   console.time("start");
//   // console.clear();

//   date.setTime(date.getTime() + 1000);
//   console.log(date.toLocaleString());

//   //console.log(new Date().toLocaleString());
//   console.timeEnd("start");
// }, 1000);

const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Yey, it works");
    } else {
      reject("Not working, error");
    }
  }, 3000);
});

console.log("Promise prepared, wait for then!");

const fullfiled = (value) => {
  console.log("fulfilled!");
  console.log(value);
  // return new Promise()
};

const reject = (error) => {
  console.log("error!");
  console.log(error);
};

const finallyFunc = () => {
  console.log("finally!");
};

promise
  .then(fullfiled)
  .then(() => console.log("then"))
  .catch(reject)
  .finally(finallyFunc);

// const promiseCalc = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5)
//     }, 1000)
// })

// promiseCalc
//     .then(value => {
//         console.log('start')
//         console.log(value)
//         return value * 2;
//     })
//     .then(value => {
//         console.log(value)
//         return value * 2;
//     })
//     .then(value => {
//         console.log(value)
//         return value * 2;
//     })
//     .then(value => {
//         console.log(value)
//     })
//     .catch(() => {})
//     .finally(() => {
//         console.log('the end')
//     })

// const fetchUserFromServer = (username) => {
//     return new Promise((resolve, reject) => {
//         console.log(`Fetching data for ${username}`)

//         setTimeout(() => {
//             const isSuccess = true;

//             if (isSuccess) {
//                 resolve('success value') -> Promise.resolve(...)
//             } else {
//                 reject('error')
//             }
//         }, 2000)
//     })
// }

// const onFetchSuccess = value => {
//     console.log(value);
// }

// const onFetchError = error => {
//     console.log(error)
// }

// fetchUserFromServer('Piotr')
//     .then(onFetchSuccess)
//     .then(() => console.log('i am here'))
//     .catch(onFetchError)
//     .finally(() => console.log('finally'))

// const makePromise = (text, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(text), delay)
//     })
// }

// const promiseA = makePromise('promiseA', 3000)
// const promiseB = makePromise('promiseB', 1000)

// promiseA.then((value) => console.log(value))
// promiseB.then((value) => console.log(value))

// console.log('----------------------')

// Promise.all([promiseA, promiseB])
//     .then((value) => {
//         console.log(value)
//     })

// Promise.race([promiseA, promiseB])
//     .then((value) => {
//         console.log(value)
//     })

// new Promise((resolve) => resolve("its good")).then((value) =>
//   console.log(value)
// );

// Promise.resolve("success value").then((value) => console.log(value));

// // index.js
// // index.css

// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import "./index.css";

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// flatpickr("#datetime-picker", options);
