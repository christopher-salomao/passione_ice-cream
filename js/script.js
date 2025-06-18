// menu

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav");

function closeMenu() {
  navList.classList.remove("active");
}

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});


// scroll suave

const links = document.querySelectorAll(".js-link");


function scrollSection(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");
  const actuallySection = document.querySelector(href);
  const sectionTop = actuallySection.offsetTop - 100;
  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });
}

links.forEach((link) => {
  link.addEventListener("click", scrollSection);
});
