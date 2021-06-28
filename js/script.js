const url = "https://api.yelp.com/v3/businesses/search?location=paris";

const apiKey =
  "P2XEzD7Hvx_Pmb_zWlonS4RjMU0amcDGn0Gb26McJAZGOwPIZ4NLoIXmkJ9X4eP8R6n9tkGYPJ8AYs7ybkKoWe1f3wVGWdqsQWBs3Z_X86OE8J1llnQk8pugjMLZYHYx";

const headers = {
  Authorization: `${apiKey}`,
  "Content-Type": "application/json",
};

const userAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36";

const options = {
  Accept: "*/*",
  "User-Agent": userAgent,
  headers: headers,
  mode: "no-cors",
  "Access-Control-Allow-Method": "GET",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "https://api.yelp.com",
};

async function getData() {
  try {
    const response = await fetch(
      "https://api.yelp.com/v3/businesses/search?location=paris",
      options
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (err) {
    console.log(err);
  }
}

getData();

// let headersList = {
//   credentials: "include",
//   mode: "no-cors",
//   Accept: "*/*",
//   "User-Agent": "Thunder Client (https://www.thunderclient.io)",
//   Authorization:
//     "Bearer P2XEzD7Hvx_Pmb_zWlonS4RjMU0amcDGn0Gb26McJAZGOwPIZ4NLoIXmkJ9X4eP8R6n9tkGYPJ8AYs7ybkKoWe1f3wVGWdqsQWBs3Z_X86OE8J1llnQk8pugjMLZYHYx",
// };

// fetch(
//   "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=paris",
//   {
//     method: "GET",
//     headers: headersList,
//   }
// )
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
