'use strict';


/**
 * common variables
 */

const navbar = document.querySelector('[data-navbar]');
const navToggleBtns = document.querySelectorAll('[data-nav-toggle-btn]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const expandBtn = document.querySelector('[data-expand-btn]');
const heroList = document.querySelector('[data-hero-list]');
const brandSpan = document.querySelector('[data-brand]');


/**
 * navbar toggle
 */


for (let i = 0; i < navToggleBtns.length; i++) {
    navToggleBtns[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        this.classList.toggle("active");
        expandBtn.classList.toggle("active");
    });
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navbar.classList.remove("active");
        this.classList.remove("active");
        expandBtn.classList.remove("active");
    })
}


/**
 * header sticky
 */

const header = document.querySelector('[data-header]');

window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});


/**
 * master template
 */

const brands = ["Coca Cola Brand", "Unilever Brand", "Waterworld Waterpark Ayla Napa", "Amazon electronics"];

brands.forEach(brand => {
    heroList.innerHTML += `
            <li>
            <div class="brand-card">
            <a href="#" target="_blank">
                <span class="brand" data-brand>${brand}</span>

                <span class="ion-icon">
                <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
            </a>
            </div>
        </li>
        `
});