//to select elements
const input = document.querySelector("#search-input");
const form = document.querySelector("form");
const mainContent = document.querySelector(".main");
const imageContent = document.querySelector(".image");

//to get data using fetch functions
async function getData(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=8ba5cc96c36f96b47b4d8afe09192f27&lang=en&q=${city}`);
    const data = await res.json();
    console.log(data);
    const date = new Date(data.dt * 1000).toLocaleDateString();

    mainContent.innerHTML = `
        <section>
            <h3>${data.name}</h3>
            <p>${date}</p>
        </section>
        <hr />
        <section>
            <h3 class="temp">${data.main.temp} C</h3>
            <p>${data.main.temp_min} C/ ${data.main.temp_max} C</p>
            <p class="weather-image-container"> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon" class="icon-image" /> ${data.weather[0].description}</p>
        </section>
        <hr />
        <section>
            <p>Wind: ${data.wind.speed}km/h</p>
            <p>Humidity: ${data.main.humidity}%</p>
        </section>
    `;
    input.value = "";
}

//form submitting
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === "") {
        alert("Please, fill empty field!");
        return;
    }
    getData(input.value);
});