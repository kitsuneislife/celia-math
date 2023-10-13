const mtbutton = document.getElementById("mt-button");
const hnavcontainer = document.getElementById("h-nav-container");
const hnavclose = document.getElementById("h-nav-close");

mtbutton.addEventListener("click", () => {
  hnavcontainer.classList.toggle("active")
});
hnavclose.addEventListener("click", () => {
  hnavcontainer.classList.toggle("active")
});