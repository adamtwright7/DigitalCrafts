const searchButton = document.querySelector(".search");

const getWeather = async () => {
    const weatherInput = document.querySelector("text").value;
    const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${weatherInput}&appid=`
    );
    const json = await weatherData.json();

    console.log(json);

    const tempReading = document.querySelector(".temp")
    tempReading.innerHTML = `It feels like ${json.main.feels_like}F in ${json.name}`
};

searchButton.addEventListener("click", getWeather);