const hamburger = document.querySelector(".nav--menu-mobile");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  document.querySelector(".nav--menu").classList.toggle("is-active");
});

const links = document.querySelectorAll(".nav--link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav--menu").classList.remove("is-active");
    hamburger.classList.remove("is-active");
  });
});
