function rangeSlide(value) {
  document.getElementById("rangevalue").innerHTML = "$" + value + ".00";
}

const button = document.querySelector(".togglebtn");
const year = document.getElementById("year");
let active = 0;

button.addEventListener("click", function () {
  if (active == 0) {
    year.innerHTML = "/year";
    active = 1;
  } else {
    year.innerHTML = "/month";
    active = 0;
  }
});
