//licznik ptrzy scrollowaniu//

const normalOutput = document.querySelector(".output.normal");
const throttledOutput = document.querySelector(".output.throttled");
const scrollEventCounter = {
  normal: 0,
  throttled: 0,
};

//1 sposób//
// document.addEventListener("wheel", (e) => {
//   console.log(e.wheelDelta);
//   if (e.wheelDelta < 0) {
//     scrollEventCounter += 1;
//   } else {
//     scrollEventCounter -= 1;
//   }
//   output.textContent = scrollEventCounter;
// });
// document.addEventListener("click", clickPage);
// function clickPage(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     output.reset();
//   }
// }

//2 sposób//
document.addEventListener("scroll", () => {
  scrollEventCounter.normal += 1;
  normalOutput.textContent = scrollEventCounter.normal;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    scrollEventCounter.throttled += 1;
    throttledOutput.textContent = scrollEventCounter.throttled;
  }, 300)
);
