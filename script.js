const hamburger = document.querySelector(".nav--menu-mobile");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  document.querySelector(".nav--menu").classList.toggle("is-active");
});
