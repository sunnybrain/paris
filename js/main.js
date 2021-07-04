"use strict";

import { activitiesList } from "../js/actitivitesList.js";
import { sightsList } from "../js/sightsList.js";
import { museumsList } from "../js/museumList.js";
import { foodList } from "../js/foodList.js";

const burgerBtn = document.querySelector(".button-container");
const sideBar = document.querySelector(".sidebar");

// Burger Button and Sidebar Animations

burgerBtn.addEventListener("click", () => {
  if (!sideBar.classList.contains("sidebar--opened")) {
    sideBar.classList.add("sidebar--opened");

    let links = document.querySelectorAll(".sidebar--opened .sidebar__item");

    setTimeout(() => {
      links.forEach((link, index) => {
        link.style.opacity = "0";
        link.style.animation = `sidebarAnimation 1s ${0.15 * index}s forwards`;
      });
    }, 600);
  } else if (sideBar.classList.contains("sidebar--opened")) {
    let links = document.querySelectorAll(".sidebar--opened  .sidebar__item");
    let linkNum = links.length;

    links.forEach((link, index) => {
      link.style.opacity = "1";
      link.style.margin = "1.5rem 4rem";
      link.style.animation = `reverseSidebarAnimation 1s ${
        linkNum * 0.15 - 0.15 * index
      }s forwards`;
    });

    setTimeout(() => {
      sideBar.classList.remove("sidebar--opened");
    }, linkNum * 150 + 1000);
  }
});

// SideBar Animations

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

/* Newsletter Submit Button */

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

/* Slider */

const nextSlideBtn = document.querySelector(".slider__btn--next");
const prevSlideBtn = document.querySelector(".slider__btn--prev");

const mainImage = document.querySelector(".slider__main-image");
const images = document.querySelectorAll(".slider__image");

let imageCounter = 1;
images[0].style.opacity = "1";

nextSlideBtn.addEventListener("click", () => {
  imageCounter++;
  if (imageCounter === images.length + 1) {
    imageCounter = 1;
  }
  mainImage.src = `images/slides/${imageCounter}.jpg`;

  images.forEach((image) => (image.style.opacity = ".6"));

  images[imageCounter - 1].style.opacity = "1";
});

prevSlideBtn.addEventListener("click", () => {
  imageCounter--;
  if (imageCounter === 0) {
    imageCounter = images.length;
  }
  mainImage.src = `images/slides/${imageCounter}.jpg`;

  images.forEach((image) => (image.style.opacity = ".6"));

  images[imageCounter - 1].style.opacity = "1";
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    images.forEach((image) => (image.style.opacity = ".6"));
    image.style.opacity = "1";

    mainImage.src = image.src;
  });
});
