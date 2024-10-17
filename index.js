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

const dailyTemp = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min"


async function getWeather() {
    try {
        const response = await fetch(dailyTemp);
        const data = await response.json();
        data.daily.time.forEach((date, index) => {
            console.log(index)
            document.getElementById("days").innerHTML += `
            <div class="col-12 col-md-3">
                <div class="card text-bg-light mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${formatDate(date)}</h5>
                        <p class="card-text">${daily.temperature_2m_min[index]}-${daily.temperature_2m_max[index]}</p>
                    </div>
                </div>
            </div>`
        })
    } catch (error) {
        console.log(error);
    }
}
getWeather();
