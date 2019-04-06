let places = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (allCities) => {
    let domString = '';
    allCities.forEach((city) => {
        domString += `<h3>${city.cityName}</h3>`
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