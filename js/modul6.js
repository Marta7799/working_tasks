// const title = document.createElement('h2')
// title.textContent = 'Hej, GoIT'

// const container = document.querySelector('.container')

// container.append(title)
// // container.prepend(title)
// // container.after(title)
// // container.before(title)

// const button = document.querySelector(".button");

// button.addEventListener(
// event -> click, mouseup, keyboarddown, keyboardup
// handler -> callback
// options -> opcje dla naszego listenera
// )

// const handleClick = () => {
//   console.log("button clicked!");
// };

// const secondHandleClick = () => {
//   console.log("button clicked once more!");
//   button.removeEventListener("click", handleClick);
// };

// button.addEventListener("click", handleClick);
// button.addEventListener("click", secondHandleClick);

// this

// const mango = {
//   username: "mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is ${this.username}`);
//   },
// };

// mango.showUsername();

// button.addEventListener("click", mango.showUsername.bind(mango));

// const button = document.querySelector(".button");

// const handleClick = (event) => {
//   console.log("clicked!");
//   console.log(event.currentTarget);
// };

// // // e, ev, evt, event
// //button.addEventListener('click', (event) => handleClick(event))
// button.addEventListener("click", handleClick);
// button.addEventListener("mousedown", handleClick);

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   //console.log(event.currentTarget.elements);
//   const {
//     elements: { username, email },
//   } = event.currentTarget;

//   console.log(username.value, email.value);
// });

// const handleClick = (event) => {
//   console.log({ event });
// };

// document.addEventListener("keydown", handleClick); // <- it's good!

// document.addEventListener("keyup", handleClick);

// document.addEventListener("keydown", (event) => {
//   event.preventDefault();

//   console.log(event.code);

//   //event.keyCode

//   if (event.ctrlKey && event.code === "KeyP") {
//     console.log("print!");
//   }
// });

const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");
const select = document.querySelector(".pizza-select");

select.addEventListener("change", (event) => {
  const currentTarget = event.currentTarget;
  const { value, selectedIndex, options } = currentTarget;
  const text = options[selectedIndex].text;

  console.log({ value, selectedIndex, options });

  valueOutput.textContent = value;
  textOutput.textContent = text;
});

const textInput = document.querySelector(".text-input");
const textInputOutput = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value;

  if (value.length < 8) {
    textInputOutput.textContent = "minimum 8 znaków!";
  } else {
    textInputOutput.textContent = value;
  }
});

document.activeElement;
