const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('#searchButton');
const temperature = document.querySelector('#temperature');
const desc = document.querySelector('#description');
const humid = document.querySelector('#humidity');
const speed = document.querySelector('#windSpeed');
const weatherDetails = document.querySelector('#weatherDetails');
const noDataFound = document.querySelector('#noData');
const weatherImg = document.querySelector('#weatherImg');

async function getWeatherData(city) {
    const apiKey = "ae5999efaeb23f888760f88b034151a3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(`${url}`);
    const data = await response.json();
    if (data.cod == 404) {
        weatherDetails.style.display = 'none';
        noDataFound.style.display = 'flex';
        noDataFound.style.flexDirection = 'column';
    }
    else {
        weatherDetails.style.display = 'flex';
        noDataFound.style.display = 'none';
        temperature.innerText = `${Math.round(data.main.temp - 273.15)}°C`;
        desc.innerText = `${data.weather[0].description}`
        humid.innerText = `${data.main.humidity}%`;
        speed.innerHTML = `${data.wind.speed} km/H`;
    }
    switch (data.weather[0].main) {
        case 'Clouds' || 'clouds':
             weatherImg.src = "../Phase 2 Normal Task/assets/cloud.png"
            break;
        case 'Clear' || 'clear': weatherImg.src = "../Phase 2 Normal Task/assets/clear.png";
            break;
        case 'Rain' || 'rain': weatherImg.src = "../Phase 2 Normal Task/assets/rain.png";
            break;
        case 'Mist' || 'mist': weatherImg.src = "../Phase 2 Normal Task/assets/mist.png";
            break;
        case 'Snow' || 'snow': weatherImg.src = "../Phase 2 Normal Task/assets/snow.png";
            break;
        case 'drizzle' || 'Drizzle': weatherImg.src = "../Phase 2 Normal Task/assets/rain.png";
            break;
        default:
            break;
    }

}


searchButton.addEventListener('click', () => {
    getWeatherData(searchBar.value);

})