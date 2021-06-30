"use strict";

export let foodList = [
  {
    name: "Happy Caffé",
    id: "AzmLFVuOHT3QbfGcoLe4qg",
    rating: 5,
    review_coutn: 54,
    title: "Creperies",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/p0mqr1w0C6d0SSQwPWCBnQ/o.jpg",
    url: "https://www.yelp.com/biz/happy-caff%C3%A9-paris-2?adjust_creative=DTtLSFbl_eDBDPgEF5M4MA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DTtLSFbl_eDBDPgEF5M4MA",
    address: "214 rue de Rivoli",
  },
  {
    name: "A. Lacroix",
    id: "OonhT4mr0ZOK7-yD3t1nOA",
    rating: 5,
    review_coutn: 70,
    title: "Coffee & Tea",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/v4D0oeWJ55tKRkfoFeZMbg/o.jpg",
    url: "https://www.yelp.com/biz/a-lacroix-paris-2?adjust_creative=DTtLSFbl_eDBDPgEF5M4MA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DTtLSFbl_eDBDPgEF5M4MA",
    address: "11 quai de Montebello",
  },
  {
    name: "Holybelly 5",
    id: "rbBs01WKKsVZG61q5IwJ_w",
    rating: 4.5,
    review_coutn: 236,
    title: "Breakfast & Brunch",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/4EvXgjj0spXR_F-Uej9Csw/o.jpg",
    url: "https://www.yelp.com/biz/holybelly-5-paris-2?adjust_creative=DTtLSFbl_eDBDPgEF5M4MA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DTtLSFbl_eDBDPgEF5M4MA",
    address: "5 rue Lucien Sampaix",
  },
  {
    name: "Blé Sucré",
    id: "0ywhA79RdU_uwPsmXJcYKw",
    rating: 4.5,
    review_coutn: 295,
    title: "Bakeries",
    image:
      "https://s3-media4.fl.yelpcdn.com/bphoto/5mZxJUNQB5sWquR21f-a6g/o.jpg",
    url: "https://www.yelp.com/biz/bl%C3%A9-sucr%C3%A9-paris-2?adjust_creative=DTtLSFbl_eDBDPgEF5M4MA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DTtLSFbl_eDBDPgEF5M4MA",
    address: "7 rue Antoine Vollon",
  },
  {
    name: "La Coïncidence",
    id: "WHHt_Jb8Tgidn9mW7oDnIg",
    rating: 4.5,
    review_coutn: 493,
    title: "French",
    image:
      "https://s3-media1.fl.yelpcdn.com/bphoto/QdrAgEgbd5TLlqZYT_dezg/o.jpg",
    url: "https://www.yelp.com/biz/la-co%C3%AFncidence-paris-4?adjust_creative=DTtLSFbl_eDBDPgEF5M4MA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DTtLSFbl_eDBDPgEF5M4MA",
    address: "15 rue Mesnil",
  },
  {
    name: "Le Comptoir de la Gastronomie",
    id: "-0iLH7iQNYtoURciDpJf6w",
    rating: 4.5,
    review_coutn: 1093,
    title: "French",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/Je6THJBI0U0b1N47INfaKQ/o.jpg",
    url: "https://www.yelp.com/biz/le-comptoir-de-la-gastronomie-paris?adjust_creative=DTtLSFbl_eDBDPgEF5M4MA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DTtLSFbl_eDBDPgEF5M4MA",
    address: "34 rue Montmartre",
  },
  {
    name: "Le Potager du Père Thierry",
    id: "657yy3D4SwyQN3xIjG1Iww",
    rating: 4.5,
    review_coutn: 426,
    title: "French",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/_FHiBmcjKRbmoAIXxeFOcA/o.jpg",
    url: "https://www.yelp.com/biz/le-potager-du-p%C3%A8re-thierry-paris-2?adjust_creative=DTtLSFbl_eDBDPgEF5M4MA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DTtLSFbl_eDBDPgEF5M4MA",
    address: "16 rue des Trois Frères",
  },
  {
    name: "Du Pain et des Idées",
    id: "OlKlrqbTx94iMPuakMs0Pw",
    rating: 4.5,
    review_coutn: 453,
    title: "Bakeries",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/vX6-XwyqiShrR5npENG8PA/o.jpg",
    url: "https://www.yelp.com/biz/du-pain-et-des-id%C3%A9es-paris-10-2?adjust_creative=DTtLSFbl_eDBDPgEF5M4MA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DTtLSFbl_eDBDPgEF5M4MA",
    address: "34 rue Yves Toudic",
  },
  {
    name: "Al Caratello",
    id: "2xMKFWLjktrlRWGzZAkiEQ",
    rating: 4.5,
    review_coutn: 194,
    title: "Italian",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/_gSOAVKW_7GTKc-JEKpTMw/o.jpg",
    url: "https://www.yelp.com/biz/al-caratello-paris-2?adjust_creative=DTtLSFbl_eDBDPgEF5M4MA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DTtLSFbl_eDBDPgEF5M4MA",
    address: "5 rue Audran",
  },
];
