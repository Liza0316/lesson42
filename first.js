import { WEATHER_API_DOMAIN } from './constants.js';
import './style/style.css'; 
export function openModal() {
    document.getElementById("modal").style.display = "block";
}

export function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function getBackgroundImage(city) {
    fetch(`https://api.unsplash.com/photos/random?query=${city}&client_id=nSZsEQhmcRrPvwgaoDJbaXg-1hO3Zf8cNuAyYWWMb2Q`)
        .then((response) => response.json())
        .then((data) => {
            const imageUrl = data.urls.regular;
            document.body.style.backgroundImage = `url(${imageUrl})`;
        })
        .catch((error) => {
            console.error("Error fetching background image:", error);
        });
}

function weatherLeft(name, coord){
    const { lon, lat } = coord;
    document.getElementById("city-name").textContent = name;
    document.getElementById("longitude").textContent = lon;
    document.getElementById("latitude").textContent = lat;
}

function weatherMiddle(weather, main){
    const { main: weatherTheme, description, icon } = weather[0];
    const { temp, feels_like } = main;
    document.getElementById("weather-main").textContent = weatherTheme;
    document.getElementById("weather-description").textContent = description;
    document.getElementById("temp-current").textContent = temp;
    document.getElementById("temp-current-feelings").textContent = feels_like;
    document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${icon}.png`;
}

function weatherRight(main, wind){
    const { humidity } = main;
    const { speed } = wind;
    document.getElementById("wind-speed").textContent = speed;
    document.getElementById("humidity").textContent = humidity;
}

function getWeatherDetails(weatherUrl) {
    const city = document.getElementById('city').value.trim();
    fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => {
            const { name, coord, weather, main, wind } = data;
            weatherLeft(name, coord);
            weatherMiddle(weather, main);
            weatherRight(main, wind);
            getBackgroundImage(city);
            
            document.getElementById("pressure").textContent = main.pressure;
            document.getElementById("visibility").textContent = data.visibility;
            document.getElementById("temp-max").textContent = main.temp_max;
            document.getElementById("temp-min").textContent = main.temp_min;
            document.getElementById("sunrise").textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById("sunset").textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();

            document.querySelector('.weather-info').classList.remove('hidden');
        })
        .catch((error) => {
            console.error(error.message);
            alert("ERROR!!!!!");
        });
}

function weather_App(){
    const form = document.getElementById('city-form');
    form.addEventListener ('submit', function(event){
        event.preventDefault();
        const city = document.getElementById('city').value.trim(); 
        if (city?.length > 1){
            getWeatherDetails(`${WEATHER_API_DOMAIN}&q=${city}`);
        }
    });
}

weather_App();
