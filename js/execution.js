"use strict";

import { activities, sights, museums, food } from "../js/data.js";

function checkPlaces(placesList) {
  placesList.businesses.forEach((business) => {
    if (!uniquePlacesNames.includes(business.name)) {
      uniquePlacesNames.push(business.name);
      uniquePlacesList.push([
        business.name,
        business.id,
        business.rating,
        business.review_count,
        business.categories[0].title,
        business.image_url,
        business.url,
        business.location.address1,
      ]);
    }
  });
}

let uniquePlacesNames = [];
let uniquePlacesList = [];

checkPlaces(activities);
checkPlaces(sights);
checkPlaces(museums);
checkPlaces(food);

let museumsList = uniquePlacesList
  .filter((place) => place[4] === "Museums")
  .sort((a, b) => b[2] - a[2]);

uniquePlacesList = uniquePlacesList.sort((a, b) => b[2] - a[2]);
console.log(uniquePlacesList);
