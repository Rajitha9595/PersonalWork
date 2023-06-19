async function getWeather() {
    var locationInput = document.getElementById("locationInput");
    var weatherInfo = document.getElementById("weatherInfo");
  
    var location = locationInput.value;
    if (location === "") {
      alert("Please enter a location.");
      return;
    }
  
    try {
      var apiKey = "985cd7813e9c490085c215704231906"; // Replace with your actual API key
      var url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  
      var response = await fetch(url);
      var data = await response.json();
  
      var weather = data.current.condition.text;
      var temperature = data.current.temp_c;
      var humidity = data.current.humidity;
  
      weatherInfo.innerHTML = `
        <p>Location: ${location}</p>
        <p>Weather: ${weather}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
      `;
    } catch (error) {
      weatherInfo.textContent = "Error retrieving weather information.";
      console.error(error);
    }
  }
  