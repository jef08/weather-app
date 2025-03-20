navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const weatherUrl = `https://wttr.in/${latitude},${longitude}?format=j1`;

    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        const localLocation = data.nearest_area[0].areaName[0].value;
        const localRegion = data.nearest_area[0].region[0].value;
        const temp = data.current_condition[0].temp_F;
        const description = data.current_condition[0].weatherDesc[0].value;
        const humidity = data.current_condition[0].humidity;
        const uvIndex = data.current_condition[0].uvIndex;
        const windSpeed = data.current_condition[0].windspeedMiles;
        const windDirection = data.current_condition[0].winddir16Point;
        document.querySelector('.local-location').textContent = `${localLocation}, ${localRegion}`;
        document.querySelector('.local-temp').textContent = `${temp} f`;
        document.querySelector('.local-desc').textContent = `${description}`;
        document.querySelector('.local-humidity').textContent = `${humidity}%`;
        document.querySelector('.local-uv').textContent = `${uvIndex}`;
        document.querySelector(`.local-wind`).textContent = `${windSpeed}mph`;
        document.querySelector('.local-wind-dir').textContent = `${windDirection}`;

    })
    .catch(error => console.log('error', error));
})



fetch('https://wttr.in/ogden?format=j1')
    .then(response => response.json())
    .then(data => {
        const temp = data.current_condition[0].temp_F;
        const description = data.current_condition[0].weatherDesc[0].value;
        const humidity = data.current_condition[0].humidity;
        const uvIndex = data.current_condition[0].uvIndex;
        const windSpeed = data.current_condition[0].windspeedMiles;
        const windDirection = data.current_condition[0].winddir16Point;
        document.querySelector('.input-weather').textContent = `Current temperature: ${temp}, ${description}, Humidity: ${humidity},
        UV: ${uvIndex}, wind Speed: ${windSpeed}, wind direction: ${windDirection}`;
    })
    .catch(error => console.log('error', error));