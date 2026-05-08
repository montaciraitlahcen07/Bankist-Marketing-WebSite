"use strict";
const btnScrollToElement = document.querySelector(".btn--scroll-to");
const firstSectionElement = document.querySelector("#first_section");
const navLinksElement = document.querySelector(".nav_links");
const tabbedComponentElement = document.querySelector(".tabbed_component");
const navElement = document.querySelector(".nav");
btnScrollToElement.addEventListener("click", () => {
  firstSectionElement.scrollIntoView({ behavior: "smooth" });
});
document.querySelectorAll(".nav_link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
navLinksElement.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

// tabbed component
tabbedComponentElement.addEventListener("click", function (e) {
  const target = e.target.closest("button");
  if (!target) return;
  const id = target.getAttribute("component");
  target.classList.add("translate-y-[-66%]");
  [...tabbedComponentElement.children]
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

navElement.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav_link")) {
    const target = e.target;
    const siblings = target.closest(".nav").querySelectorAll(".nav_link");
    const logo = target.closest(".nav").querySelector("#img");
    siblings.forEach(el => {
        if(el != target) el.classList.add('opacity-[.5]');
    })
    logo.classList.add('opacity-[.5]');
  }
});
navElement.addEventListener("mouseout", function (e) {
    const target = e.target;
    const siblings = target.closest(".nav").querySelectorAll(".nav_link");
    const logo = target.closest(".nav").querySelector("#img");
    siblings.forEach((el) => {
      if (el != target) el.classList.remove("opacity-[.5]");
    });
    logo.classList.remove("opacity-[.5]");
});
const firstSectionTop = firstSectionElement.getBoundingClientRect().top;
window.addEventListener('scroll', function() {
    if(window.scrollY > firstSectionTop) navElement.classList.add('Sticky');
    else navElement.classList.remove('Sticky');
});