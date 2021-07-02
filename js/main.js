"use strict";

import { activitiesList } from "../js/actitivitesList.js";
import { sightsList } from "../js/sightsList.js";
import { museumsList } from "../js/museumList.js";
import { foodList } from "../js/foodList.js";

const burgerBtn = document.querySelector(".button-container");
const sideBar = document.querySelector(".sidebar");

// Burger Button

burgerBtn.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar--opened");
});

// Top Actitvites Section Data Added

function dataAddedToSection(dataList, sectionId, imagePosition) {
  const dataSection = document.querySelector(`#${sectionId} .gallery__wrapper`);

  dataSection.innerHTML = "";

  dataList.forEach((data) => {
    let dataBlock = document.createElement("div");
    dataBlock.classList.add("gallery__guide", "guide");

    if (data.description.length > 50) {
      data.description = data.description.substring(0, 120) + "...";
    }

    if (imagePosition == undefined) {
      imagePosition = "bottom";
    }

    dataBlock.innerHTML = `
    <div class="guide__image-box">
      <img
        src=${data.image}
        alt="guide image"
        class="guide__image"
        style="object-position:${imagePosition};"
      />
    </div>
  
    <div class="guide__info">
      <div class="guide__name-box">
        <h4 class="guide__name">${data.name}</h4>
        <p class="guide__title">${data.title}</p>
      </div>
  
      <p class="guide__description">
        ${data.description}
      </p>
  
    <div class="guide__rating-display">
      <div class="guide__rating">
        <img
          src="images/regular/${data.rating}.png"
          alt="rating stars"
          class="guide__rating-stars"
        />
        <span>${data.rating}</span>
      </div>
      <p class="guide__reviews">Based on ${data.review_coutn} reviews</p>
    </div>
  </div>`;

    dataSection.appendChild(dataBlock);
  });
}

dataAddedToSection(activitiesList, "topActivities", "center");
dataAddedToSection(sightsList, "topSights");
dataAddedToSection(museumsList, "topMuseums", "center");
dataAddedToSection(foodList, "frenchFood", "center");

// Next and Prev Buttons

function buttonSlideEvents(sectionId) {
  const nextButton = document.querySelector(
    `#${sectionId} .gallery__button--next`
  );
  const prevButton = document.querySelector(
    `#${sectionId} .gallery__button--prev`
  );
  const galleryWrapper = document.querySelector(
    `#${sectionId} .gallery__wrapper`
  );
  const slides = Array.from(galleryWrapper.children);
  let slidesNumber = slides.length;

  let slideWidth = galleryWrapper.getBoundingClientRect().width / 3;

  window.addEventListener("resize", () => {
    slideWidth = galleryWrapper.getBoundingClientRect().width / 3;
  });

  let slideCount = 0;

  nextButton.addEventListener("click", () => {
    slideCount++;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${slideWidth * slideCount}px)`;
    });
    if (slideCount === slidesNumber - 3) {
      nextButton.style.display = "none";
    } else if (slideCount > 0) {
      prevButton.style.display = "block";
    }
  });

  prevButton.addEventListener("click", () => {
    slideCount--;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${slideWidth * slideCount}px)`;
    });
    if (slideCount === 0) {
      prevButton.style.display = "none";
    } else if (slideCount < slidesNumber - 3) {
      nextButton.style.display = "block";
    }
  });
}

buttonSlideEvents("topActivities");
buttonSlideEvents("topSights");
buttonSlideEvents("topMuseums");
buttonSlideEvents("frenchFood");

/* Submit Button */

const submitButton = document.querySelector("#submit");
const input = document.querySelector(".newsletter__input");
const modal = document.querySelector("#modal");
const newsletterAlert = document.querySelector(".newsletter__alert");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.validity.valid && input.value != "") {
    modal.style.display = "flex";
    newsletterAlert.style.opacity = "0";
  } else if (input.value === "" || input.validity.valid === false) {
    newsletterAlert.style.opacity = "1";
  }
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
