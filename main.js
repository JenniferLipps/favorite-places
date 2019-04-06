let places = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (allCities) => {
    let domString = '';
    allCities.forEach((city) => {
      domString += `<div class="card col-4 bg-secondary mb-3 border border-dark">`
      domString += `<div class="card-body">`
      domString += `<h2 class="card-header" id="card-head">${city.cityName}, ${city.cityState}</h2>`
      domString += `<img src=${city.cityImage} alt=${city.cityName} class="img-fluid rounded" alt="Responsive image" id="city-image">`
      domString += `<div id="best-text">`
      domString += `<p>Best Restaurant: ${city.favoriteRestaurant}</p>`
      domString += `<p>Best Bar: ${city.favoriteBar}</p>`
      domString += `<p>Best Hotel: ${city.favoriteHotel}</p>`
      domString += `<p>Best Tourist Attraction: ${city.favoriteTouristAttraction}</p>`
      domString += `</div>`
      domString += `</div>`
      domString += `</div>`
    })
  printToDom('favCities', domString);
};

function successCode() {
    const data = JSON.parse(this.responseText)
    places = data.places;
    domStringBuilder(data.places);
}

function failedCode() {
    console.error('oops');
}

const getCityData = () => {
  const cityRequest = new XMLHttpRequest();
  cityRequest.addEventListener('load', successCode);
  cityRequest.addEventListener('error', failedCode);
  cityRequest.open('GET', './db/places.json');
  cityRequest.send();
};

const init = () => {
    getCityData();
};

init();