//licznik ptrzy scrollowaniu//

const output = document.querySelector(".output");
let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
//   //output.reset();
//   //output.scroll = null;
// });
document.addEventListener("wheel", (e) => {
  console.log(e.wheelDelta);
  if (e.wheelDelta < 0) {
    scrollEventCounter += 1;
  } else {
    scrollEventCounter -= 1;
  }
  output.textContent = scrollEventCounter;
});
document.addEventListener("click", clickPage);
function clickPage(event) {
  if (event.target.nodeName !== "BUTTON") {
    output.reset();
  }
}
