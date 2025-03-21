//window.addEventListener("load", () => {
        //document.querySelector('.input-weather-div').style.display = 'none';
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
            document.querySelector('.local-temp').textContent = `${temp}\u00B0f`;
            document.querySelector('.local-desc').textContent = `${description}`;
            document.querySelector('.humidity-desc').textContent = `Humidity:`
            document.querySelector('.local-humidity').textContent = `${humidity}%`;
            document.querySelector('.uv-desc').textContent = `UV Index:`;
            document.querySelector('.local-uv').textContent = `${uvIndex}`;
            document.querySelector('.wind-desc').textContent = `Wind Speed:`
            document.querySelector(`.local-wind`).textContent = `${windSpeed}mph`;
            document.querySelector('.wind-dir-desc').textContent = `Wind Direction:`
            document.querySelector('.local-wind-dir').textContent = `${windDirection}`;

        })
        .catch(error => console.log('error', error));
    })
//})



document.getElementById('submit-bttn').addEventListener('click', (event) => {
    event.preventDefault(); //This keeps the form from submitting and reloading the page which would cause the local weather to be shown again//
    const inputText = document.getElementById('text-box').value.trim();

    if (inputText) {
        const weatherUrl = `https://wttr.in/${inputText}?format=j1`;
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
            document.querySelector('.local-temp').textContent = `${temp}\u00B0f`;
            document.querySelector('.local-desc').textContent = `${description}`;
            document.querySelector('.humidity-desc').textContent = `Humidity:`
            document.querySelector('.local-humidity').textContent = `${humidity}%`;
            document.querySelector('.uv-desc').textContent = `UV Index:`;
            document.querySelector('.local-uv').textContent = `${uvIndex}`;
            document.querySelector('.wind-desc').textContent = `Wind Speed:`
            document.querySelector(`.local-wind`).textContent = `${windSpeed}mph`;
            document.querySelector('.wind-dir-desc').textContent = `Wind Direction:`
            document.querySelector('.local-wind-dir').textContent = `${windDirection}`;
        })
        .catch(error => console.log('error', error));
    } else {
        alert('Please enter a city and country')
    }
})
