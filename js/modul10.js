// console.log("A")

// setTimeout(() => console.log("B"), 0)

// const promise = new Promise(resolve => {
//   resolve("C")
// })

// promise.then(value => console.log(value))

// console.log("D")

// console.log("A")

// Promise.resolve("B")
//   .then((value) => console.log(value))
//   .catch(() => console.log("C"))
//   .finally(() => console.log("D"))

// console.log("E")

// const promise = new Promise((resolve, reject) => {
//   reject("whoops")
// })

// promise.then(...).catch

// const promise = new Promise((resolve) => {
//   resolve(10);
// })

// promise
//   .then(value => {
//     new Promise(resolve => {
//       resolve(value * 2)
//     })
//   })
//   .then(value => console.log(value))

// http -> https

// REST API ->

// CRUD ->
//   Create
//   Read
//   Update
//   Delete

// GET -> pobierz
// POST -> stwórz
// PUT -> jeśli nie ma to stwórz, jeśli jest to modyfikuj
// PATCH -> jeśli nie ma to nic, jeśli jest to modyfikuj
// DELETE -> usuń

// POST <Nagłówki> www.interia.pl/api/articles { title: 'goit', text: 'hej'}

// 1. Metoda HTTP
// 2. Nagłówki HTTP
// 3. Ścieżka
// 4. Ciało -> body

// 1XX - info
// 2XX - success
// 3XX - redirect
// 4XX - client error
// 5XX - server error

const baseUrl = "https://jsonplaceholder.typicode.com";
const path = "/users";
const params = "?_limit=8&_sort=name";

const searchParams = new URLSearchParams({
  _limit: 8,
  sort: "name",
  // page:
});

// console.log(searchParams.toString())

const headers = new Headers({
  "Content-Type": "application/json",
});

headers.append("X-Custom-Header", "value");
console.log(headers.has("Content-Type"));

// const comments = '/comments';
const url = `${baseUrl}${path}?${searchParams}`;
const options = {
  headers,
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
    // return response.body
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// //wp.pl/users -> wp.pl/api
// //Origin: htpps://wp.pl
