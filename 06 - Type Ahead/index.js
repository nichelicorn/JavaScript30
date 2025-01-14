  // 🌐 Global variables
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const cities = [];
  
  // 🔎 Query selectors
  const queryInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  // 👂 Event listeners
  queryInput.addEventListener("change", displayMatches);
  queryInput.addEventListener("keyup", displayMatches);


// 🦴 Fetch request
const prom = fetch(endpoint)
  .then(blob => blob.json())
  .then(data =>cities.push(...data))

// ⚙️ Functions
function findMatches(query, cities) {
  return cities.filter(place => {
    const regex = new RegExp(query, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });  
}

function numWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
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