function successCode() {
    console.log('success');
}

function failedCode() {
    console.error('shit');
}

const getCityData = () => {
  const cityRequest = new XMLHttpRequest();
  cityRequest.addEventListener('load', successCode);
  cityRequest.addEventListener('error', failedCode);
  cityRequest.open('GET', './db/places.json');
  cityRequest.send();
  console.log(cityRequest);
};

const init = () => {
    getCityData();
};

init();