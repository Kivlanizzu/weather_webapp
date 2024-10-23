const wmo = {
    0: {
        day: {
            description: "Sunny",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg",
        },
        night: {
            description: "Clear",
            image: "http://openweathermap.org/img/wn/01n@2x.png",
        },
    },
    1: {
        day: {
            description: "Mainly Sunny",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg",
        },
        night: {
            description: "Mainly Clear",
            image: "http://openweathermap.org/img/wn/01n@2x.png",
        },
    },
    2: {
        day: {
            description: "Partly Cloudy",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/cloudy.svg",
        },
        night: {
            description: "Partly Cloudy",
            image: "http://openweathermap.org/img/wn/02n@2x.png",
        },
    },
    3: {
        day: {
            description: "Cloudy",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/overcast-day.svg",
        },
        night: {
            description: "Cloudy",
            image: "http://openweathermap.org/img/wn/03n@2x.png",
        },
    },
    45: {
        day: {
            description: "Foggy",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/fog.svg",
        },
        night: {
            description: "Foggy",
            image: "http://openweathermap.org/img/wn/50n@2x.png",
        },
    },
    48: {
        day: {
            description: "Rime Fog",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/haze.svg",
        },
        night: {
            description: "Rime Fog",
            image: "http://openweathermap.org/img/wn/50n@2x.png",
        },
    },
    51: {
        day: {
            description: "Light Drizzle",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg",
        },
        night: {
            description: "Light Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    53: {
        day: {
            description: "Drizzle",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/hail.svg",
        },
        night: {
            description: "Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    55: {
        day: {
            description: "Heavy Drizzle",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg",
        },
        night: {
            description: "Heavy Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    56: {
        day: {
            description: "Light Freezing Drizzle",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/sleet.svg",
        },
        night: {
            description: "Light Freezing Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    57: {
        day: {
            description: "Freezing Drizzle",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/sleet.svg",
        },
        night: {
            description: "Freezing Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    61: {
        day: {
            description: "Light Rain",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg",
        },
        night: {
            description: "Light Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
        },
    },
    63: {
        day: {
            description: "Rain",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/hail.svg",
        },
        night: {
            description: "Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
        },
    },
    65: {
        day: {
            description: "Heavy Rain",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg",
        },
        night: {
            description: "Heavy Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
        },
    },
    66: {
        day: {
            description: "Light Freezing Rain",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/sleet.svg",
        },
        night: {
            description: "Light Freezing Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
        },
    },
    67: {
        day: {
            description: "Freezing Rain",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/sleet.svg",
        },
        night: {
            description: "Freezing Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
        },
    },
    71: {
        day: {
            description: "Light Snow",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg",
        },
        night: {
            description: "Light Snow",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    73: {
        day: {
            description: "Snow",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg",
        },
        night: {
            description: "Snow",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    75: {
        day: {
            description: "Heavy Snow",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-snow.svg",
        },
        night: {
            description: "Heavy Snow",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    77: {
        day: {
            description: "Snow Grains",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg",
        },
        night: {
            description: "Snow Grains",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    80: {
        day: {
            description: "Light Showers",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg",
        },
        night: {
            description: "Light Showers",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    81: {
        day: {
            description: "Showers",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/hail.svg",
        },
        night: {
            description: "Showers",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    82: {
        day: {
            description: "Heavy Showers",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg",
        },
        night: {
            description: "Heavy Showers",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    85: {
        day: {
            description: "Light Snow Showers",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg",
        },
        night: {
            description: "Light Snow Showers",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    86: {
        day: {
            description: "Snow Showers",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg",
        },
        night: {
            description: "Snow Showers",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    95: {
        day: {
            description: "Thunderstorm",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms.svg",
        },
        night: {
            description: "Thunderstorm",
            image: "http://openweathermap.org/img/wn/11n@2x.png",
        },
    },
    96: {
        day: {
            description: "Light Thunderstorms With Hail",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-rain.svg",
        },
        night: {
            description: "Light Thunderstorms With Hail",
            image: "http://openweathermap.org/img/wn/11n@2x.png",
        },
    },
    99: {
        day: {
            description: "Thunderstorm With Hail",
            image: "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-rain.svg",
        },
        night: {
            description: "Thunderstorm With Hail",
            image: "http://openweathermap.org/img/wn/11n@2x.png",
        },
    },
};
