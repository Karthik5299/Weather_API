
# Project Title

A brief description of what this project does and who it's for


## CODTHECH-Task1

- Name :JAMI KARTHIKEYA
- ID:CT4FWD3930
- Domain:FRONTEND WEB DEVELOPMENT
- Duration: July to August 2024
- Mentor: Neela Santhosh Kumar

# Project Title

WEATHER DASHBOARD

# Overview of the project
## HTML Structure
**Head Section** Contains metadata and references to the CSS file (styles.css).

**Body Section:**

**Header:** Displays the title of the application (Weather Dashboard).

**Card:** Main container for the weather information and search functionality.

**Search:** Input field and button for entering and submitting city names.

**Weather:** Container for displaying weather data (temperature, city name, weather icon, humidity, wind speed).

**Error:** Placeholder for displaying error messages if the city is not found.

## Body Structure

The CSS file (styles.css) defines the styling for various elements in the app, including the card layout, search input, weather details, and responsive design adjustments.

## JavaScript (script.js)
The JavaScript file (script.js) handles the dynamic behavior of the app, primarily fetching weather data from the OpenWeatherMap API based on user input. Here's an overview of its functionality:

**Variables:** apiKey and apiUrl are defined to store the OpenWeatherMap API key and base URL.

**Event Listeners:**
searchBtn listens for clicks on the search button.
When clicked, it calls the checkWeather function with the value from searchBox.

**Function checkWeather(city):**
Uses fetch to call the OpenWeatherMap API with the provided city name and API key.

**Checks the response status:**
- If 404 (city not found), displays an error message (error div) and hides the weather display (weather div).

- If successful, parses the JSON response and updates the HTML elements (city, temp, humidity, wind, weather-icon) with relevant weather data.

- Sets the appropriate weather icon (weather-icon) based on weather conditions (Clouds, Clear, Rain, etc.).

- Displays the weather div and hides the error div.


## 🔗 Links
- [WEATHER DASHBOARD](https://karthik5299.github.io/CODTECH-Task2/)




