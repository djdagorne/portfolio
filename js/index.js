const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

const pic2 = document.getElementsByClassName("about-me__img")[0];

window.addEventListener("scroll", function () {
  /* slight parallax on second img */
  const offset = window.pageYOffset / 7;
  pic2.style.top = offset * 0.5 + "px";
});
