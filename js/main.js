"use strict";

const burgerBtn = document.querySelector(".button-container");
const sideBar = document.querySelector(".sidebar");

burgerBtn.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar--opened");
});
