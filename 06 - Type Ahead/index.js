  // 🌐 Global variables
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const cities = [];
  
  // Query selectors
  const queryInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  // Event listeners
  queryInput.addEventListener("change", displayMatches);
  queryInput.addEventListener("keyup", displayMatches);


// Fetch request
const prom = fetch(endpoint)
  // .then(blob => console.log("blob <>>>", blob)); 
  // blob needs to be converted from its raw data state into JSON
  .then(blob => blob.json())
  // converts data to a usable JSON object
  // .then(data => console.log("data <>>>", data))
  // logs the entire dataset
  .then(data =>cities.push(...data))
  // using the spread operator adds each city into the array, instead of pushing one huge array
// console.log("prom <>>>", prom);
// console.log("cities <>>>", cities);

function findMatches(query, cities) {
  return cities.filter(place => {
    // need to determine if the query is found in the place
    const regex = new RegExp(query, "gi");
    return place.city.match(regex) || place.state.match(regex);
    // will check the city AND state in the dataset to check for a query match
  });  
}

function numWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  // console.log("the value <>>>", this.value); // logs the value input into the search bar
  const matchArray = findMatches(this.value, cities);
  // console.log("matchArray <>>>", matchArray);
  const html = matchArray.map(place => {
    // use a RegEx to highlight the characters in the return that matches the query input
    const regex = new RegExp(this.value, "gi");
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numWithCommas(place.population)}</span>
      </li>
    `;
  }).join("");
  suggestions.innerHTML = html;
}

