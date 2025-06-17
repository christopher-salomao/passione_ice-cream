const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav");

function closeMenu() {
  navList.classList.remove("active");
}

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});
