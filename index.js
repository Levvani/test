const inpt = document.getElementById("1");
const misho = document.getElementById("masha");

inpt.addEventListener("input", () => {
  const inputValue = inpt.value;
  sessionStorage.setItem("inputValue", inputValue);
});

misho.addEventListener("mouseover", () => {
  misho.style.color = "pink";
});
misho.addEventListener("mouseout", () => {
  misho.style.color = "unset";
});

window.addEventListener("DOMContentLoaded", (e) => {
  const savedValue = sessionStorage.getItem("inputValue");
  if (savedValue) {
    inpt.value = savedValue;
  }
});
