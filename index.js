const inpt = document.getElementById("1");

inpt.addEventListener("input", () => {
  const inputValue = inpt.value;
  sessionStorage.setItem("inputValue", inputValue);
});

window.addEventListener("DOMContentLoaded", (e) => {
  const savedValue = sessionStorage.getItem("inputValue");
  if (savedValue) {
    inpt.value = savedValue;
  }
});
