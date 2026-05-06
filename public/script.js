"use strict";
const btnScrollTo = document.querySelector('.btn--scroll-to');
const firstSection = document.querySelector('.first_section');
const navLinks = document.querySelector('.nav_links');
btnScrollTo.addEventListener('click', () => {
    firstSection.scrollIntoView({behavior: 'smooth'});
})
// document.querySelectorAll('.nav_link').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
//     })
// })
navLinks.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
})
