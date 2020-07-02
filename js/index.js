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

const intro = document.getElementById("intro");
const pic2 = document.getElementsByClassName("about-me__img")[0];

window.addEventListener("scroll", function () {
  /* hero div parallax */
  const offset = window.pageYOffset;
  intro.style.top = offset * 0.9 + "px";

  /* slight parallax on second img */
  const offset2 = window.pageYOffset / 7;
  pic2.style.top = offset2 * 0.5 + "px";
});
