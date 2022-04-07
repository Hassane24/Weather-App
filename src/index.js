import { neededData } from "./Modules/fetch";
const searchBar = document.querySelector("#searchBar");
const searchButton = document.querySelector("#startSearch");

searchButton.addEventListener("click", () => {
  neededData(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&APPID=512dd7c72356c3b72f04ac7af77e9f8a&units=metric`
  ).then((res) => {
    if (res.cod === "404") return console.log(res.message);
    console.log(res);
  });
});
