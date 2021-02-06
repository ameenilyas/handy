// to visible navbar
const header = document.querySelector("header");
var toggler = document.querySelector(".toggler");
const navList = document.querySelector(".nav-list");
const body = document.querySelector("body");
const slider = document.querySelector(".slider");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const team = document.querySelector("#team");
const learn = document.querySelector("#learn");
const form = document.querySelector("#form");
const footer = document.querySelector("footer");
toggler.addEventListener("click", () => {
  body.classList.toggle("height-changer");
  navList.classList.toggle("show-nav");
  slider.classList.toggle("nav-active");
  about.classList.toggle("nav-show");
  projects.classList.toggle("nav-show");
  team.classList.toggle("nav-show");
  learn.classList.toggle("nav-show");
  form.classList.toggle("nav-show");
  footer.classList.toggle("nav-show");
  header.classList.contains("stick-header")
    ? header.classList.toggle("bg-none")
    : header.classList.remove("bg-none");
});

// to make sticky header

window.addEventListener("scroll", () => {
  window.scrollY > 150
    ? header.classList.add("stick-header")
    : header.classList.remove("stick-header");
});

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector("#form .container");
sign_in_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_up_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const listItems = document.querySelectorAll(".nav-list li");
listItems.forEach((list) => {
  list.addEventListener("click", () => {
    navList.classList.remove("show-nav");
    body.classList.remove("height-changer");
    slider.classList.remove("nav-active");
    about.classList.remove("nav-show");
    projects.classList.remove("nav-show");
    team.classList.remove("nav-show");
    learn.classList.remove("nav-show");
    form.classList.remove("nav-show");
    footer.classList.remove("nav-show");
    header.classList.contains("stick-header")
      ? header.classList.toggle("bg-none")
      : header.classList.remove("bg-none");
  });
});
