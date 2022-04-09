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

  return { loadHomePage };
})();

export { UI };
