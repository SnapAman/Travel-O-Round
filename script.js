'use strict';

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



const popupWrapper = document.querySelector('.popupWrapper')
const bookBtns = document.querySelectorAll('.booknow')
const closeBtn = document.querySelector('.closeBox')
bookBtns.forEach(b=>{
  b.addEventListener('click', () => {
    popupWrapper.classList.toggle('active')
  })
})
closeBtn.addEventListener('click', () => {
  popupWrapper.classList.toggle('active')
})

document.querySelector('.my-popup').addEventListener('click', function(event) {
  if (event.target === this) {
      event.stopPropagation();
      popupWrapper.classList.remove('active')
  }
});