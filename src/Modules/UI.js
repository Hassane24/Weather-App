import { neededData } from "./fetch";

const UI = (() => {
  const searchBar = document.querySelector("#searchBar");
  const searchButton = document.querySelector("#startSearch");
  const temp = document.querySelector("#temp");
  const location = document.querySelector("#location");
  const date = document.querySelector("#date");
  const weatherIcon = document.querySelector("#weather-icon");
  const weatherState = document.querySelector("#weather-state");
  const states = document.querySelectorAll("[data-state]");
  const wind = document.querySelector("#wind");
  const humidity = document.querySelector("#humidity");
  const clouds = document.querySelector("#clouds");
  const convertDegree = document.querySelector("#fahrenheit");

  convertDegree.addEventListener("click", () => {
    if (!temp.textContent) return;
    if (convertDegree.checked) {
      const temperature = parseFloat(temp.textContent);
      temp.textContent = round(celsiusToFahrenheit(temperature), 2);
    } else {
      const temperature = parseFloat(temp.textContent);
      temp.textContent = round(fahrenheitToCelsius(temperature), 2);
    }
  });

  const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  const round = (num, places) => {
    num = parseFloat(num);
    places = places ? parseInt(places, 10) : 0;
    if (places > 0) {
      let length = places;
      places = "1";
      for (let i = 0; i < length; i++) {
        places += "0";
        places = parseInt(places, 10);
      }
    } else {
      places = 1;
    }
    return Math.round((num + Number.EPSILON) * (1 * places)) / (1 * places);
  };

  states.forEach((state) => {
    state.addEventListener("click", (e) => {
      neededData(
        `https://api.openweathermap.org/data/2.5/weather?q=${e.target.innerText}&APPID=512dd7c72356c3b72f04ac7af77e9f8a&units=metric`
      ).then((res) => {
        convertDegree.checked = false;
        displayData(res);
        getTimeZone(res);
      });
    });
  });

  searchButton.addEventListener("click", () => {
    neededData(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&APPID=512dd7c72356c3b72f04ac7af77e9f8a&units=metric`
    ).then(
      (res) => {
        if (res.cod === "400") return alert(res.message);
        if (res.cod === "404") return alert(res.message);
        convertDegree.checked = false;
        displayData(res);
        getTimeZone(res);
        searchBar.value = "";
      },
      (err) => {
        console.log(err);
      }
    );
  });

  function displayData(data) {
    const METERS_PER_SECS_TO_KM_PER_HOURS = 3.6;
    if (data === undefined) return;
    location.textContent = data.name;
    temp.textContent = `${data.main.temp}??C`;
    weatherState.textContent = data.weather[0].main;
    clouds.textContent = `${data.clouds.all}%`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${
      Math.round(data.wind.speed * METERS_PER_SECS_TO_KM_PER_HOURS * 100) / 100
    }km/h`;
    if (weatherState.textContent == "Clear") weatherIcon.src = "images/sun.svg";
    if (weatherState.textContent == "Thunderstorm")
      weatherIcon.src = "images/lightning.svg";
    if (weatherState.textContent == "Snow") weatherIcon.src = "images/snow.svg";
    if (weatherState.textContent == "Clouds")
      weatherIcon.src = "images/cloudy.svg";
    if (weatherState.textContent == "Rain")
      weatherIcon.src = "images/rainy.svg";
  }

  function getTimeZone(data) {
    let YEAR = "";
    let MONTH = "";
    let DAYMONTH = "";
    let DAY = "";
    let HOUR = "";
    let MINUTES = "";
    const datey = new Date();
    const offset = datey.getTimezoneOffset();
    datey.setMinutes(datey.getMinutes() + offset + data.timezone / 60);
    YEAR = datey.getFullYear();
    DAYMONTH = datey.getDate();
    HOUR = datey.getHours();
    MINUTES = datey.getMinutes();
    if (datey.getMonth() == 0) MONTH = "Jan";
    if (datey.getMonth() == 1) MONTH = "Feb";
    if (datey.getMonth() == 2) MONTH = "Mar";
    if (datey.getMonth() == 3) MONTH = "Apr";
    if (datey.getMonth() == 4) MONTH = "May";
    if (datey.getMonth() == 5) MONTH = "June";
    if (datey.getMonth() == 6) MONTH = "July";
    if (datey.getMonth() == 7) MONTH = "Aug";
    if (datey.getMonth() == 8) MONTH = "Sep";
    if (datey.getMonth() == 9) MONTH = "Oct";
    if (datey.getMonth() == 10) MONTH = "Nov";
    if (datey.getMonth() == 11) MONTH = "Dec";
    if (datey.getDay() == 0) DAY = "Sunday";
    if (datey.getDay() == 1) DAY = "Monday";
    if (datey.getDay() == 2) DAY = "Tuesday";
    if (datey.getDay() == 3) DAY = "Wednesday";
    if (datey.getDay() == 4) DAY = "Thursday";
    if (datey.getDay() == 5) DAY = "Friday";
    if (datey.getDay() == 6) DAY = "Saturday";
    date.textContent = `${HOUR}:${MINUTES} - ${DAY}, ${DAYMONTH} ${MONTH} ${YEAR}`;
  }
})();

export { UI };
