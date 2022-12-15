const searchButton = document.querySelector(".search");

const getWeather = async () => {
    const weatherInput = document.querySelector(".weather").value;
    const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${weatherInput}&appid=ff1cadec65d9f10c3aafc2a01b14612c`
    );
    const json = await weatherData.json();

    console.log(json);

    const tempReading = document.querySelector(".temp")
    tempReading.innerHTML = `It feels like ${json.main.feels_like}F in ${json.name}`
};

searchButton.addEventListener("click", getWeather);