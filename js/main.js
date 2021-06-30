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

const activitiesSection = document.querySelector(
  "#topActivities .gallery__wrapper"
);
console.log(activitiesSection);

activitiesSection.innerHTML = "";

activitiesList.forEach((activity) => {
  let activityBlock = document.createElement("div");
  activityBlock.classList.add("gallery__guide", "guide");

  if (activity.description.length > 50) {
    activity.description = activity.description.substring(0, 120) + "...";
  }

  activityBlock.innerHTML = `
  <div class="guide__image-box">
    <img
      src=${activity.image}
      alt="guide image"
      class="guide__image"
    />
  </div>

  <div class="guide__info">
    <div class="guide__name-box">
      <h4 class="guide__name">${activity.name}</h4>
      <p class="guide__title">${activity.title}</p>
    </div>

    <p class="guide__description">
      ${activity.description}
    </p>

  <div class="guide__rating-display">
    <div class="guide__rating">
      <img
        src="images/regular/${activity.rating}.png"
        alt="rating stars"
        class="guide__rating-stars"
      />
      <span>${activity.rating}</span>
    </div>
    <p class="guide__reviews">Based on ${activity.review_coutn} reviews</p>
  </div>
</div>`;

  activitiesSection.appendChild(activityBlock);
});
