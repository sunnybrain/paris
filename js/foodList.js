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
    description:
      "What a friendly group of people that work here! They really live up to their name. Given that it's very centrally located, I think we were lucky to get the prices we did - for fresh, delicious crepes and food. The servers made cordial conversation for us while making the food, and we really felt welcomed. It was so good, we wish we were able to stop by more than once, to be honest.",
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
    description:
      "Very cute bakery and coffee shop. We came here to take a break after visiting notre dame. The staff was friendly and cute. Interior was decorated nicely and had a rustic Alice in wonderland vibe. We sat outside to enjoy the scenery (you get the view of the back of notre dame).",
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
    description:
      "This place is the holy grail of breakfast cafes!!! There's usually a queue to get seated, which is understandable... but it is well worth the wait! The savory stack is SO good! The perfect combo of sweet and savory. OMG and the 'eggs and sides'! Their soft scramble is what egg dreams are made of! Just absolutely perfect and creamy. Probably the best soft scramble I've had in my entire life.",
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
    description:
      "All the fresh pastries are lined up behind small glass windows with a huge tray of croissants behind the register. Quick service, line out the door, pick something to get you on your way.",
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
    description:
      "This place is really good for dinner. It's not that big with a room in the front and one on the back, but it's really comfy, especially with the cool items on the wall and funky music playing.",
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
    description:
      "This restaurant is simply amazing!!! If you are debating on trying this restaurant, just do it !!! You will not be disappointed. The whole staff from servers, to the manger, to the chefs in the back are top notch. The pricing is also really good and the serving sizes are big. Come hungry.",
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
    description:
      "The menu is small but everything on it is delicious. I ordered a steak, medium but felt it was medium well. Knowing how steak is usually eaten I'm France, I should have ordered it med rare ( my mistake). The steak came with salad and potatoes, very filling and healthy.",
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
    description:
      "Came here in search of the best croissants but came upon the praline escargot that was amazing!!!  I have been craving this wonderful pastry since returning to the states but unfortunately can't find it. The buttery pastry with the salty caramel and bits of pecans made this to die for. Unfortunately we did not make it here until our last day in Paris and unable to make a repeat visit. So sad!!!",
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
    description:
      "Amazing pasta for our trip from US to Paris! We didn't know that we were supposed to make reservations but the staff was kind enough to squeeze us in! I have NEVER had such divine pasta. We only have 2 nights left and we are going again for lunch today because I need to have it again.",
  },
];
