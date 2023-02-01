"use strict";

const navbarBtn = document.querySelector(".navbar__btn");
const navbarIcon = document.querySelector(".navbar__icon");
const navLinks = document.querySelectorAll(".navbar__link");
const mainMenu = document.querySelector(".navbar__list--left");
const ctaSection = document.querySelector(".section--cta");
const ctaSectionBtn = document.querySelector(".btn--cta");
const header = document.querySelector(".header");
const loginBtnClose = document.querySelector(".popup__btn--login");
const loginForm = document.querySelector(".login");
const loginOverlay = document.querySelector(".section--login");
const marker = document.querySelector(".marker");
const loginSection = document.getElementById("login-section");
const nav = document.querySelector(".navbar");
class HomeEffects {
  constructor(menuClassActive, menuClassClose) {
    this.menuClassActive = menuClassActive;
    this.menuClassClose = menuClassClose;
  }
  hideNav() {
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("navbar--hidden");
      } else {
        nav.classList.remove("navbar--hidden");
      }
      lastScrollY = window.scrollY;
    });
  }
  // Main Menu
  toggleMenu() {
    mainMenu.classList.toggle("navbar--toggle");
    navbarIcon.classList.toggle("navbar--close");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `fadeInLeft 0.8s ease forwards ${
          index / 7 + 0.2
        }s `;
      }
    });
  }
  startMenuEvent() {
    navbarBtn.addEventListener("click", this.toggleMenu);
  }
  // Link underline marker
  marker(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
  }
  startMarker(e) {
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        this.marker(e.target);
      });
    });
    navLinks.forEach((link) => {
      link.addEventListener("mouseout", function () {
        marker.style.width = "0px";
      });
    });
  }
  // Animate Sections
}
class AnimateHome {
  constructor() {}
  animateSections() {}
}
const mobileMenu = new HomeEffects("Hello", "Hello").startMenuEvent();
const hideNav = new HomeEffects("hi").hideNav();
const markerStart = new HomeEffects("hi").startMarker();
// navbar

// Revailing Elements
const pricingSection = document.querySelector("#section--pricing");

const addAnimations = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};

const sectionObserver = new IntersectionObserver(addAnimations, {
  root: null,
  threshold: 0.15,
});

sectionObserver.observe(pricingSection);
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionsObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3,
});

const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  sectionsObserver.observe(section);
  section.classList.add("section--hidden");
});

const loader = document.querySelector(".loader");

window.addEventListener("load", function (e) {
  this.document.querySelector(".loader").style.display = "none";
});
const stepsBtn = document.querySelectorAll(".steps__btn");
const stepsContainer = document.querySelector(".steps__btns");
const stepContent = document.querySelectorAll(".steps__content");
stepsContainer.addEventListener("click", function (e) {
  const clickedBtn = e.target.closest(".steps__btn");
  console.log(clickedBtn);
  // Guard clause
  if (!clickedBtn) return;
  // Active Tab
  stepsBtn.forEach((btn) => btn.classList.remove("steps__btn--active"));
  clickedBtn.classList.add("steps__btn--active");
  // Active contant area
  stepContent.forEach((content) =>
    content.classList.remove("steps__content--active")
  );
  document
    .querySelector(`.steps__content--${clickedBtn.dataset.tab}`)
    .classList.add("steps__content--active");
});
$(function () {
  $(".btn--cta").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      },
      1000
    );
  });
});
// $(function () {
//   $(".btn--cta").click(function (e) {
//     e.preventDefault();
//     $("html, body").animate(
//       {
//         scrollTop: $("#" + $(this).data("scroll")).offset().top,
//       },
//       1000
//     );
//   });
// });
$(function () {
  $(".navbar__link").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      },
      1000
    );
  });
});
