"use strict";

import { activities, sights, museums, food } from "../js/data.js";

function checkPlaces(placesList, sectionList) {
  placesList.businesses.forEach((business) => {
    if (!uniquePlacesNames.includes(business.name)) {
      uniquePlacesNames.push(business.name);
      uniquePlacesList.push({
        name: business.name,
        id: business.id,
        rating: business.rating,
        review_coutn: business.review_count,
        title: business.categories[0].title,
        image: business.image_url,
        url: business.url,
        address: business.location.address1,
      });
      sectionList.push({
        name: business.name,
        id: business.id,
        rating: business.rating,
        review_coutn: business.review_count,
        title: business.categories[0].title,
        image: business.image_url,
        url: business.url,
        address: business.location.address1,
      });
    }
  });
  sectionList = sectionList.sort((a, b) => b.rating - a.rating);
}

let uniquePlacesNames = [];
let uniquePlacesList = [];
let activitiesList = [];
let sightsList = [];
let museumsList = [];
let foodList = [];

checkPlaces(museums, museumsList);
checkPlaces(sights, sightsList);
checkPlaces(activities, activitiesList);
checkPlaces(food, foodList);
