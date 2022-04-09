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

  function loadHomePage() {}

  states.forEach((state) => {
    state.addEventListener("click", (e) => {
      neededData(
        `https://api.openweathermap.org/data/2.5/weather?q=${e.target.innerText}&APPID=512dd7c72356c3b72f04ac7af77e9f8a&units=metric`
      ).then((res) => {
        displayData(res);
        console.log(res);
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
        console.log(res);
        displayData(res);
        getTimeZone(res);
      },
      (err) => {
        console.log(err);
      }
    );
  });

  function displayData(data) {
    location.textContent = data.name;
    temp.textContent = `${data.main.temp}°C`;
    weatherState.textContent = data.weather[0].main;
    clouds.textContent = `${data.clouds.all}%`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${Math.round(data.wind.speed * 3.6 * 100) / 100}km/h`;
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

  return { loadHomePage };
})();

export { UI };
