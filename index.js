const d = new Date(); 
document.getElementById("date").innerHTML = d;
function dateFormatted(date) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const dateFormatted = new Date(date);
    return dateFormatted.toLocaleDateString("id-ID", options);
}



async function getWeather(latitude,longitude) {
    try {
        const response = await fetch( `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min`);
        const data = await response.json();
        for (let i = 0; i < data.daily.time.length; i++) {
            document.getElementById("days").innerHTML += 
            `<div class="col-12 col-md-4">
                <div class="card text-bg-light mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${dateFormatted(data.daily.time[i])}</h5>
                        <p class="card-text">${data.daily.temperature_2m_min[i]} - ${data.daily.temperature_2m_max[i]}</p>
                    </div>
                </div>
            </div>`
        }
    } catch (error) {
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

const currentweather = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,weather_code&timezone=auto"
