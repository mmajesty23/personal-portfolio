"use strict";
const nav = document.getElementById("nav");
const btnHamburger = document.getElementById("hamburger");
const navHeight = nav.getBoundingClientRect().height;

// nav fixed
const observerCallback = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("navbar-fixed");
  } else {
    nav.classList.remove("navbar-fixed");
  }
};

const observerOptions = {
  root: null,
  threshold: 0.5,
  rootMargin: `-${navHeight}px`,
};
const headerObserver = new IntersectionObserver(
  observerCallback,
  observerOptions
);
headerObserver.observe(nav);

// Hamburger
btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle("hamburger--active");
});
