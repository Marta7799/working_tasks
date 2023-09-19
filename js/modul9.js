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

//zegar
setInterval(() => {
  console.log(new Date().toLocaleString());
}, 1000);

// setInterval(() => {
//   console.timeEnd("start");
//   //   console.clear();

//   //   date.setTime(date.getTime() + 1000);
//   //   console.log(date.toLocaleString());

//   console.log(new Date().toLocaleString());
//   console.time("start");
// }, 1000);
