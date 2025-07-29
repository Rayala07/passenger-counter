let count = 0;

let countElement = document.getElementById("count-element");
let saveEl = document.getElementById("save-el");

function increment() {
  count++;
  countElement.innerText = count;
}

let saveElement = document.getElementById("save-btn");

function save() {
  let countStr = " " + count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countElement.textContent = count;
}
