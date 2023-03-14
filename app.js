//to select elements
const input = document.querySelector("#search-input");
const form = document.querySelector("form");
const mainContent = document.querySelector(".main");

//to get data using fetch functions
async function getData(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=8ba5cc96c36f96b47b4d8afe09192f27&lang=en&q=${city}`);
    const data = await res.json();
    console.log(data);
    mainContent.innerHTML = `
        <section>
            <h3>${data.name}</h3>
            <p>Wed 22 August</p>
        </section>
        <hr />
        <section>
            <h3>${data.main.temp}</h3>
            <p>${data.main.temp_min} / ${data.main.temp_max} C</p>
            <p>icon ${data.weather[0].description}</p>
        </section>
        <hr />
        <section>
            <p>Wind: ${data.wind.speed}km/h</p>
            <p>Humidity: ${data.main.humidity}%</p>
        </section>
    `;
}

//form submitting
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input.value === "") {
        alert("Please, fill empty field!");
        return;
    }
    getData(input.value);
});



/*
{
    "coord": {
        "lon": 27.0923,
        "lat": 38.4622
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 8.73,
        "feels_like": 4.7,
        "temp_min": 8.73,
        "temp_max": 8.73,
        "pressure": 1014,
        "humidity": 57
    },
    "visibility": 10000,
    "wind": {
        "speed": 9.26,
        "deg": 350
    },
    "clouds": {
        "all": 20
    },
    "dt": 1678737206,
    "sys": {
        "type": 1,
        "id": 6977,
        "country": "TR",
        "sunrise": 1678681612,
        "sunset": 1678724147
    },
    "timezone": 10800,
    "id": 311044,
    "name": "İzmir",
    "cod": 200
} 
*/