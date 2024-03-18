'use strict';

/**
 * navbar toggle
 */


const navbar = document.querySelector('[data-navbar');
const navToggleBtn = document.querySector('[data-nav-toggle-btn]');
const navLinks = document.querySelectorAll('[data-nav-link]');



/**
 * header sticky
 */

const header = document.querySelector('[data-header]');


window.addEventListener("scroll",function (){
    if (this.window.scrollY >= 40) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
} )


