const button = document.querySelector(".togglebtn");
const year = document.getElementById("year");
const rangeInput = document.getElementById("rangevalue");
let active = 0;
let newvalue = 0;

function rangeSlide(value) {
  newvalue = value;
  if (active == 0) {
    rangeInput.innerHTML = "$" + newvalue + ".00";
  } else {
    rangeInput.innerHTML = `\$${newvalue * 12 - newvalue * 12 * 0.25}.00`;
  }
}

button.addEventListener("click", function () {
  if (active == 0) {
    year.innerHTML = "/year";
    rangeInput.innerHTML = `\$${newvalue * 12 - newvalue * 12 * 0.25}.00`;
    active = 1;
  } else {
    year.innerHTML = "/month";
    active = 0;
  }
});

let slider_color = document.querySelector(".range");
slider_color.oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #A4F3EB 0%, #A4F3EB " +
    value +
    "%, #ECF0FB " +
    value +
    "%, #ECF0FB 100%)";
};
