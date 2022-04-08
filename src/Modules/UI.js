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

  function loadHomePage() {}

  states.forEach((state) => {
    state.addEventListener("click", (e) => {
      neededData(
        `https://api.openweathermap.org/data/2.5/weather?q=${e.target.innerText}&APPID=512dd7c72356c3b72f04ac7af77e9f8a&units=metric`
      ).then((res) => {
        console.log(res);
      });
    });
  });

  searchButton.addEventListener("click", () => {
    neededData(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&APPID=512dd7c72356c3b72f04ac7af77e9f8a&units=metric`
    ).then(
      (res) => {
        console.log(res);
        if (res.cod === "400") return console.log(res.message);
        if (res.cod === "404") return console.log(res.message);
      },
      (err) => {
        console.log(err);
      }
    );
  });

  return { loadHomePage };
})();

export { UI };
