function dateFormatted(date) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const dateFormatted = new Date(date);
    return dateFormatted.toLocaleDateString("en-US", options);
}

async function getWeatherByCity() {
    try{
        const city = document.getElementById("city").value;
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
    );
    const responseJson = await response.json();
    const latitude = responseJson.results[0].latitude;
    const longitude = responseJson.results[0].longitude;
    const cityName = responseJson.results[0].name;
    getWeather(latitude, longitude);
    document.getElementById("city-name").innerHTML = cityName;
    document.getElementById("city").value = "";
    } catch (error){
        alert("The City Name Not Found")
    }
}

async function getWeather(latitude,longitude) {
    try {
        const response = await fetch( `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min`);
        const data = await response.json();
        const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,weather_code`);
        const data2 = await response2.json();
        document.getElementById("days").innerHTML = "";
        for (let i = 1; i < data.daily.time.length; i++) {
            document.getElementById("days").innerHTML += 
            `<div class="col-12 col-md-4">
                <div class="card text-bg-info mb-3">
                    <div class="card-body">
                        <img class="card-img-top" style="width: 50%; margin-left: auto; margin-right: auto; justify-self: center; display: flex;" src="${
                            wmo[data.daily.weather_code[i]].image
                        }" alt="${wmo[data.daily.weather_code[i]].description}" class="card-img-top">
                        <h5 class="card-title">${dateFormatted(data.daily.time[i])}</h5>
                        <p class="card-text">${data.daily.temperature_2m_min[i]} °C ~ ${data.daily.temperature_2m_max[i]} °C</p>
                    </div>
                </div>
            </div>`
        };
        document.getElementById("wmo").innerHTML = 
        `<img class="card-img-top" style="width: 100%; margin-left: auto; margin-right: auto; justify-self: center; display: flex;" src="${
        wmo[data2.current.weather_code].image}" alt="${wmo[data2.current.weather_code].description}" class="card-img-top">`
        document.getElementById("currenttemp").innerHTML = 
        `<p>${data2.current.temperature_2m} °C</p>`;
        document.getElementById("date").innerHTML = 
        `<p>${dateFormatted(data2.current.time)}, </p>`;
    } 
    catch (error) {
        console.log(error);
    }
}


function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude,longitude);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

getLocation()

