// const input = document.querySelector('.text-input')

// const handleInput = (event) => {
//   const currentTarget = event.currentTarget;
//   console.log(currentTarget.textContent)
//   console.log(currentTarget.content)
//   console.log(currentTarget.value)
//   console.log(currentTarget.text)
// }

// input.addEventListener('input', handleInput)

// const button = document.querySelector(".goit");
// const body = document.querySelector("body");

// // console.log(button)
// // console.log(body)

// const handleClickButton = (event) => {
//   console.log("button!");
// };

// const handleClickBody = (event) => {
//   console.log("body!");
// };

// body.addEventListener("click", handleClickBody);
// button.addEventListener("click", handleClickButton);

// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const descendant = document.querySelector(".descendant");

// const handleClick = (event, name) => {
//   //console.log(name);
//   console.log({
//     name,
//     target: event.target, // gdzie zostało kliknięte
//     currentTarget: event.currentTarget, // jaki element obsługuje ten event
//   });
// };

// parent.addEventListener("click", (event) => handleClick(event, "parent"));
// child.addEventListener("click", (event) => handleClick(event, "child"));
// descendant.addEventListener("click", (event) =>
//   handleClick(event, "descendant")
// );

// const desc = "descendant :)";

// const handleClickDesc = (event) => {
//   event.stopPropagation();
//   event.stopImmediatePropagation();
//   console.log(desc);
//   console.log("descendant! :)");
// };

// descendant.addEventListener("click", (event) =>
//   handleClick(event, "descendant")
// );
// descendant.addEventListener("click", (event) =>
//   handleClick(event, "descendant")
// );
// descendant.addEventListener("click", handleClickDesc);
// descendant.addEventListener("click", (event) =>
//   handleClick(event, "descendant")
// );
// descendant.addEventListener("click", (event) =>
//   handleClick(event, "descendant")
// );
// descendant.addEventListener("click", (event) =>
//   handleClick(event, "descendant")
// );
// descendant.addEventListener("click", (event) =>
//   handleClick(event, "descendant")
// );
// descendant.addEventListener("click", (event) =>
//   handleClick(event, "descendant")
// );

// const first = document.querySelector('.first')
// const second = document.querySelector('.second')

// first.addEventListener("click", event => {
//   console.log(event.currentTarget)
// })

// second.addEventListener('click', event => {
//   console.log(event.target)
// })

document.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log("scrolled - throttle");
  }, 300)
);

document.addEventListener(
  "scroll",
  _.debounce(
    () => {
      console.log("scrolled - debounce");
    },
    300,
    {
      leading: true,
      trailing: true,
    }
  )
);
