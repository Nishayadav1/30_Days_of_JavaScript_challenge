const getWeatherBtn = document.getElementById('getWeather');

getWeatherBtn.addEventListener('click', () => {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location.');
        return;
    }

    // Replace with your API key
    const apiKey = '96ab59e2905cce575b3bce2ead24e216';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response data to the console

            const weatherDetails = document.getElementById('weatherDetails');
            if (data.cod === 200) {
                weatherDetails.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                weatherDetails.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherDetails').innerHTML = '<p>Error fetching data. Please try again.</p>';
        });
});
