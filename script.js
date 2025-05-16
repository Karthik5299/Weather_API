const apiKey = "fedb4d646d20deebd79d8592d6f0c4c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const states = [
    "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chhattisgarh",
    "goa", "gujarat", "haryana", "himachal pradesh", "jharkhand", "karnataka",
    "kerala", "madhya pradesh", "maharashtra", "manipur", "meghalaya", "mizoram",
    "nagaland", "odisha", "punjab", "rajasthan", "sikkim", "tamil nadu", "telangana",
    "tripura", "uttar pradesh", "uttarakhand", "west bengal", "delhi", "jammu and kashmir"
];

async function checkWeather(city) {
    const cityInput = city.trim().toLowerCase();

    // Check for state input
    if (states.includes(cityInput)) {
        document.querySelector(".error").innerText = "Please enter a valid city name, not a state.";
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector(".error").innerText = "City not found. Please enter a valid city name.";
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherType = data.weather[0].main;
        if (weatherType === "Clouds") weatherIcon.src = "images/clouds.png";
        else if (weatherType === "Clear") weatherIcon.src = "images/clear.png";
        else if (weatherType === "Rain") weatherIcon.src = "images/rain.png";
        else if (weatherType === "Drizzle") weatherIcon.src = "images/drizzle.png";
        else if (weatherType === "Mist") weatherIcon.src = "images/mist.png";
        else weatherIcon.src = "images/clear.png"; // fallback

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
