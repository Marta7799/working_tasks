// // const someArrayWithNumbers = [1, 2, 13, 4, -89, 4, 46, 27]
// // // console.log(someArrayWithNumbers)
// // // console.log(...someArrayWithNumbers)

// // // console.log(someArrayWithNumbers)

// // // console.log(Math.max(...someArrayWithNumbers))

// // // Math.max(...[1, 2, 13, 4]) -> Math.max(1, 2, 13, 4)

// // const copyOfArray = [...someArrayWithNumbers]
// // // const copyOfArray2 = someArrayWithNumbers

// // const otherArrayAsWell = [6, 76, 8]
// // const secondCopyOfArray = [...someArrayWithNumbers, ...otherArrayAsWell]

// // const firstObj = { name: 'Bartek', age: 25}
// // const secondObj = { whatDoOnWednesdayEvening: 'learning'}

// // console.log(firstObj, secondObj)

// // const thirdObj = { age: 30, ...firstObj, ...secondObj, isHePlayingGuitar: false, }

// // console.log(thirdObj)

// // const baseRequest = {
// //   nationality: 'Poland'
// // }

// // const requestToBackend = {
// //   ...baseRequest,
// //   nationality: 'Czech'
// // }

// // const obj123 = {
// //   a: 1,
// //   b: 2,
// //   c: 3
// // }

// // console.log(obj123)
// // console.log({...obj123})

// // function multiply(isUpdate, ...args) {
// //   isUpdate ? invokeFirstFunction(args) : invokeOfSomeAwesomeFunction(args)
// // }

// // multiply(true, 1, 2)
// // multiply(false, 1, 2, 3)
// // multiply(1, 2, 3, 4)

// const book = {
//   title: 'Harry Potter 6',
//   author: 'J.K. Rowling',
//   genres: ['adventure', 'somethingAwesome'],
//   isPublic: true,
//   rating: 9.2
// }

// const book2 = {
//   title: 'Harry Potter 6',
//   author: 'J.K. Rowling',
//   genres: ['adventure', 'somethingAwesome'],
//   isPublic: true,
//   rating: 9.2,
//   coverImage: 'abba'
// }

// // const accessType = book.isPublic ? "publiczny" : "zamknięty";
// // const message = `Książka ${book.title} autorstwa ${book.author} z oceną ${book.rating} ma dostęp ${accessType}`

// const title = 'This is title for whole page!';

// const {
//   title: firstTitle,
//   author: firstAuthor = 'not J.K. Rowling anymore',
//   isPublic,
//   rating,
//   coverImage = 'https://google.com'
// } = book;
// // ->
// // const title = book.title; -> const firstTitle = book.title
// // const author = book.author;
// // const isPublic = book.isPublic;
// // const rating = book.rating;
// // const coverImage = book.coverImage || 'https://google.com'

// const accessType = isPublic ? "publiczny" : "zamknięty";
// const message =
//   `Książka ${firstTitle} autorstwa ${firstAuthor} z oceną ${rating} ma dostęp ${accessType}, a ich cover image to: ${coverImage}`

// console.log(message)
// console.log(book.coverImage)

// // console.log(title, author, isPublic, rating)

//const books = [
// {
//  title: "The Last Kingdom",
//  author: "Bernard Cornwell",
//  rating: 8.38,
//  stats: {
//     pages: 123,
//     buyers: 15,
//    }
//  },
// {
//    title: "Beside Still Waters",
//   author: "Robert Sheckley",
//   rating: 8.51,
//   stats: {
//   pages: 85496,
//   buyers: 34895
//  }
// },
// ];

//for (const { title, author, rating } of books) {
//for (const book of books) {
//  const {
//    title,
//  author,
//   rating,
//  stats: {
//     pages,
//    buyers
//  }
// } = book;
//const { pages, buyers } = stats;

// console.log(title)
// console.log(author)
// console.log(rating)
// console.log(pages)
// console.log(buyers)

//console.log(book.title)
//console.log(book.author)
//console.log(book.rating)
// }

//const rgb = [80, 234, 79, 0.98];
//const [red, green, blue, alfa = 0.3] = rgb;

//const [red, green, ...colors] = rgb;

//c//onsole.log(red, green, colors);
//console.log(red, green, blue, alfa);

//const [, , blue] = rgb;

//console.log(blue);

//const rgbObj = { red: 80, green: 234, blue: 79 };
//const { red: redObj, green: greenObj, blue: blueObj } = rgbObj;

//console.log(red, green, blue, redObj, greenObj, blueObj);

//function multiply(first, second) {
// return first * second;
//}

//multiply(7, 5);

//const books = [];

//function createBookOld(
//  title,
// statsBuyers,
// statsPages,
// downloads,
// isPublic,
// author
//) {
// const book = {
//   title,
//   statsBuyers,
//   statsPages,
//   downloads,
//   isPublic,
//   author,
// };
// books.push(book);
//}

//createBookOld("Harry Potter 7", 34534, 1231, 543543, true, "J.K");

// ---------------------

//function createBookNew(book) {
// if (book.title) {
//   books.push(book);
// }
//}

//function createBookNew(book) {
//const { author: newAuthor, title, stats, isPublic = "test" } = book;
//books.push({
//  newAuthor,
//  title,
//  stats,
//  isFinished: isPublic,
// });
//}

// function createBookNew({ author, title, stats, isPublic}) {
//   // const { author, title, stats, isPublic} = book;
//   books.push({
//     author,
//     title,
//     stats,
//     isFinished: isPublic
//   })
// }

//createBookNew({
// author: "J.K",
// title: "Harry nie-Potter",
// stats: {
//   buyers: 12,
//  pages: 543,
// },
//isPublic: false,
//});

//console.log(books);
