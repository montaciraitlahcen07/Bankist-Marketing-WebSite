"use strict";
const btnScrollToElement = document.querySelector(".btn--scroll-to");
const firstSectionElement = document.querySelector("#first_section");
const secondSectionElement = document.querySelector("#second_section");
const thirdSectionElement = document.querySelector("#third_section");
const fourthSectionElement = document.querySelector("#fourth_section");
const navLinksElement = document.querySelector(".nav_links");
const tabbedComponentElement = document.querySelector(".tabbed_component");
const navElement = document.querySelector(".nav");
const headerElement = document.querySelector("header");
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
    siblings.forEach((el) => {
      if (el != target) el.classList.add("opacity-[.5]");
    });
    logo.classList.add("opacity-[.5]");
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
const stickyNavigation = function (entries, observer) {
  if (entries[0].isIntersecting) navElement.classList.remove("Sticky");
  else navElement.classList.add("Sticky");
};
const navHeight = navElement.getBoundingClientRect().height;
const obsNavOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
const observer = new IntersectionObserver(stickyNavigation, obsNavOptions);
observer.observe(headerElement);

const revealSection = function (entries, observer) {
  if (entries[0].isIntersecting) {
    this.classList.remove("section--hidden");
    observer.unobserve(this);
  }
};
const obsFirstSectionOptions = {
  root: null,
  threshold: 0.15,
  // rootMargin: `-${navHeight}px`,
};
const observerFirstSection = new IntersectionObserver(
  revealSection.bind(firstSectionElement),
  obsFirstSectionOptions,
);
observerFirstSection.observe(firstSectionElement);

const obsSecondSectionOptions = {
  root: null,
  threshold: 0.15,
  // rootMargin: `-${navHeight}px`,
};
const observerSecondSection = new IntersectionObserver(
  revealSection.bind(secondSectionElement),
  obsSecondSectionOptions,
);
observerSecondSection.observe(secondSectionElement);

const obsThirdSectionOptions = {
  root: null,
  threshold: 0.15,
  // rootMargin: `-${navHeight}px`,
};
const observerThirdSection = new IntersectionObserver(
  revealSection.bind(thirdSectionElement),
  obsThirdSectionOptions,
);
observerThirdSection.observe(thirdSectionElement);

const obsFourthSectionOptions = {
  root: null,
  threshold: 0.15,
  // rootMargin: `-${navHeight}px`,
};
const observerFourthSection = new IntersectionObserver(
  revealSection.bind(fourthSectionElement),
  obsFourthSectionOptions,
);
observerFourthSection.observe(fourthSectionElement);

const lazyLoading = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy--loading");
  });
  observer.unobserve(entry.target);
};
const lazyObserver = new IntersectionObserver(lazyLoading, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});
const lazyImg = document.querySelectorAll("img[data-src]");
lazyImg.forEach((img) => {
  lazyObserver.observe(img);
});
