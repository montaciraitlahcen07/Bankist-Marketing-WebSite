"use strict";
const btnScrollTo = document.querySelector(".btn--scroll-to");
const firstSection = document.querySelector(".first_section");
const navLinks = document.querySelector(".nav_links");
const tabbedComponent = document.querySelector(".tabbed_component");
btnScrollTo.addEventListener("click", () => {
  firstSection.scrollIntoView({ behavior: "smooth" });
});
// document.querySelectorAll('.nav_link').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
//     })
// })
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

//tabbed component
tabbedComponent.addEventListener("click", function (e) {
  const target = e.target.closest("button");
  const id = target.getAttribute("component");
  target.classList.add("translate-y-[-66%]");
  [...tabbedComponent.children]
    .filter(
      (el) => el.getAttribute("component") != id && el.tagName == "BUTTON",
    )
    .forEach(function (el) {
      el.classList.remove("translate-y-[-66%]");
      el.classList.add("translate-y-[-50%]");
    });
  document.querySelectorAll(".tab").forEach(function (el) {
    if (el.id == id) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
});
