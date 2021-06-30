const url =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=paris&term=sights&sort_by=rating";

const apiKey =
  "P2XEzD7Hvx_Pmb_zWlonS4RjMU0amcDGn0Gb26McJAZGOwPIZ4NLoIXmkJ9X4eP8R6n9tkGYPJ8AYs7ybkKoWe1f3wVGWdqsQWBs3Z_X86OE8J1llnQk8pugjMLZYHYx";

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

const options = {
  headers: headers,
};

async function getData() {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (err) {
    console.log(err);
  }
}

getData();
