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

/**
 * if need be to close nav bar when link is clicked? activate this part
 */

/**
 
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navbar.classList.remove("active");
        this.classList.remove("active");
        expandBtn.classList.remove("active");
    })
}

 **/


/**
 * navbar icons handling
 */

const iconsHoverUrls = ['./assets/images/IconsHovered/emailHovered.png', './assets/images/IconsHovered/passwordHovered.png', './assets/images/IconsHovered/adminHovered.png', './assets/images/IconsHovered/managementHovered.png', './assets/images/logOut.png'];
const iconsNormalUrls = ['./assets/images/email.png', './assets/images/password.png', './assets/images/admin.png', './assets/images/management.png', './assets/images/IconsHovered/logOutHovered.png'];

for (let i = 0; i < navLinks.length; i++) {

    let isFocused = false;

    navLinks[i].addEventListener('mouseover', onMouseOver);
    navLinks[i].addEventListener('mouseout', onMouseOut);
    navLinks[i].addEventListener('focus', onFocus);
    navLinks[i].addEventListener('blur', onBlur);

    function onFocus() {
        this.querySelector('img').src = iconsHoverUrls[i];
        isFocused = true;
    }

    function onBlur() {
        isFocused = false;
        onMouseOut.call(this); 
    }

    function onMouseOver() {
        if (!isFocused) {
            this.querySelector('img').src = iconsHoverUrls[i];
        }
    }

    function onMouseOut() {
        if (!isFocused) {
            this.querySelector('img').src = iconsNormalUrls[i];
        }
    }

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