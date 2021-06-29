"use strict";

const burgerBtn = document.querySelector(".nav__button-open");
const sideBar = document.querySelector(".nav__sidebar");

burgerBtn.addEventListener("click", () => {
  sideBar.classList.toggle("nav__sidebar--opened");
});
