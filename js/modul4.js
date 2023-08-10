// // foo(logger(5)) -> wartość
// // foo(logger) -> callback

// // function foo(callback) {
// //   callback(5)
// // }

// function logThis(callback) {
//   callback(12) -> console.log(12)
// }

// function callbackLogThis(value) {
//   console.log(value)
//   return console.log;
// }

// logThis(callbackLogThis) -> console.log(12)
// logThis(callbackLogThis(5)) -> console.log(5)

// //explicit
// const add = (a, b) => {
//   return a + b;
// }

// //implicit
// const add = (a, b) => a + b

// const add = (...args)

// const log = console.log

// const log = (x) => console.log(x)

// log(44) -> console.log(44)
// log(44) -> 44 => console.log(44)

// Pure Function = Czysta Funkcja

// const someFunc = () => {}

// const someDirtyFunc = () = {
//   someFunc()
// }

// dirtyMultiply([1, 2, 3], 4) -> [4, 8, 12]

//const dirtyMultiply = (array, value) => {
// for (let i = 0; i < array.length; i++) {
//   array[i] *= value; // array[i] = array[i] * value
//  }
//};

//const pureMultiply = (array, value) => {
// const newArray = [];

// for (let i = 0; i < array.length; i++) {
//   const newValue = array[i] * value;
//   newArray.push(newValue);
// }

//  return newArray;
//};

//const numbers = [5, 10, 15, 20];
//const multiply = 3;

//console.log(numbers);

//const result = pureMultiply(numbers, multiply);
// dirtyMultiply(numbers, multiply)

//console.log(numbers);
//console.log(result);

//const planets = ["Ziemia", "Mars", "Wenus", "Jowisz"];
//const planetsInLowerCase = planets.map((planet) => {//
// return planet.toLowerCase();
//});
//console.log({ planets, planetsInLowerCase });

//const students = [
// { name: "Mango", score: 83, courses: ["matematyka", "fizyka"] },
// { name: "Poly", score: 59, courses: ["informatyka", "fizyka"] },
// { name: "Ajax", score: 37, courses: ["matematyka", "biologia"] },
// { name: "Kiwi", score: 94, courses: ["polski"] },
//  { name: "Houston", score: 64, courses: [{ some: [] }, [1, 2]] },
//];

//const names = students.map((student) => student.name);
//console.log(names);

//const passedNames = students.map((student) => {
//  if (student.score > 60) {
//   return student.name;
//  }
//});

//console.log(passedNames);
//x=>x sprawdzi czy x jest true, mozna  wten sposob filtrowac
//const passedNamesFiltered = passedNames.filter((x) => x);
//console.log(passedNamesFiltered);

//[...planets] - [...students] --> tylko kopia

//const studentsMap = students.map((student) => student.courses);
//const studentsFlatMap = students.flatMap((student) => student.courses);
//const uniqueCourses = studentsFlatMap.filter((course, index, originalArray) => {
//  return originalArray.indexOf(course) === index;
//});

//console.log({ studentsMap, studentsFlatMap });

//const values = [5, 2342, -345, 121, 6546, 0, 82];

//const moreThanOneHundred = values.filter((value) => value > 100);
//const lessThanOneHundred = values.filter((value) => value < 100);

//console.log(moreThanOneHundred);
//console.log(values);
//console.log(lessThanOneHundred);

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

//console.log(colorPickerOptions.find((option) => option.label === "indigo"));
//console.log(
//  colorPickerOptions.find(
//    (option) => option.color === "#2196F3" && option.label === "blue"
//  )
//);
//console.log(
//  colorPickerOptions.find((option) => option.label === "oxdifhbodisfg")
//);

//console.log(
//  colorPickerOptions.findIndex((option) => option.label === "indigo")
//);
//console.log(
//  colorPickerOptions.findIndex(
//   (option) => option.color === "#2196F3" && option.label === "blue"
// )
//);
//console.log(
// colorPickerOptions.findIndex((option) => option.label === "oxdifhbodisfg")
//);

//const isAlwaysTrue = true;
//const numbers = [1, 2, 3, -10, 12, 89456, 5];

//const everyPositive = numbers.every((value) => value >= 0 && isAlwaysTrue); // &&
//const somePositive = numbers.some((value) => value >= 0 && isAlwaysTrue); // ||

//const everyNumber = numbers.some((value) => {
//  console.log(value);
// const multiValue = value * 43;
// if (multiValue > 716) {
//   return true;
// }
// return false;
//});

//console.log(everyPositive, somePositive, everyNumber);

//const numbers = [10, 2, 3, 4, 5];
//const initialValue = 3;

//const total = numbers.reduce((prevValue, number) => {
//  console.log({ prevValue, number });
// return prevValue + number;
//}, initialValue);

//const totalWithInit = numbers.reduce((prevValue, number) => {
//  console.log({ prevValue, number });
//  return prevValue + number;
//}, 0);

//console.log(total, totalWithInit);

//const tweets = [
// { id: "000", likes: 5, tags: ["js", "nodejs"] },
// { id: "001", likes: 2, tags: ["html", "css"] },
// { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// { id: "003", likes: 8, tags: ["css", "react"] },
// { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//];

//const likes = tweets.map((tweet) => tweet.likes);
//let result = 0;

//for (let i = 0; i < likes.length; i++) {
// result += likes[i];
//}

//console.log(result);

//const likesReduce = tweets.reduce(
//  (totalLikes, tweet) => totalLikes + tweet.likes,
//  0
//);

//console.log(likesReduce);

//const getTags = (tweets) => {
//  return tweets.reduce((allTags, tweet) => {
//  allTags.push(...tweet.tags);

//  return allTags;
//}, []);//
//};

//console.log(getTags);
//const getTagStats = (acc, tag) => {
//  if (!acc.hasOwnProperty(tag)) {
//    acc[tag] = 0;
//  }

// acc[tag] += 1;

//  console.log(acc);

// return acc;
//};

//const tags = getTags(tweets);
//const tagsCount = tags.reduce(getTagStats, {});

//console.log(tags);
//console.log(tagsCount);

//const scores = [61, 19, 74, 38, 29, 10, 5, 1, 63];
//const students = ["Bgal", "Mariusz", "Artur", "Bartek", "Wojciech"];

//const sorted = [...students].sort();

//console.log(students);
//console.log(sorted);

//const ascedingScores = [...scores].sort((a, b) => a - b);
//const descendingScores = [...scores].sort((a, b) => b - a);

//console.log(ascedingScores);
//console.log(descendingScores);

const students = [
  { name: "Mango", score: 83, courses: ["matematyka", "fizyka"] },
  { name: "Poly", score: 59, courses: ["informatyka", "fizyka"] },
  { name: "Ajax", score: 37, courses: ["matematyka", "biologia"] },
  { name: "Kiwi", score: 94, courses: ["polski"] },
];

const passedNames = students
  .map((student) => {
    if (student.score > 60) {
      return student.name;
    }
  })
  .filter((x) => x)
  .map((name) => name.toLowerCase());

// const passedNamesFiltered = passedNames.filter(x => x)

console.log(passedNames);

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index) //zeby byly unikalne
  .sort((a, b) => a.localeCompare(b)); //sortujemy alfabetycznie

console.log(uniqueSortedCourses);
