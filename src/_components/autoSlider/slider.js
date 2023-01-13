let counter = 1;
document.getElementById("radio" + counter).checked = true;
const btns = Array.from(document.querySelectorAll(".manual-btn"));

setInterval(() => {
  if (counter === 0) {
    return
  }

  document.getElementById("radio" + counter).checked = true;
  counter ++;

  if (counter > btns.length) {
    counter = 1;
  }
}, 5000);


btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clearInterval(0);
    counter = 0;
  })
})