(()=>{"use strict";async function e(e){const t=await async function(e){return fetch(e,{mode:"cors"})}(e);return t.json()}(()=>{const t=document.querySelector("#searchBar"),c=document.querySelector("#startSearch");document.querySelector("#temp"),document.querySelector("#location"),document.querySelector("#date"),document.querySelector("#weather-icon"),document.querySelector("#weather-state"),document.querySelectorAll("[data-state]").forEach((t=>{t.addEventListener("click",(t=>{e(`https://api.openweathermap.org/data/2.5/weather?q=${t.target.innerText}&APPID=512dd7c72356c3b72f04ac7af77e9f8a&units=metric`).then((e=>{console.log(e)}))}))})),c.addEventListener("click",(()=>{e(`https://api.openweathermap.org/data/2.5/weather?q=${t.value}&APPID=512dd7c72356c3b72f04ac7af77e9f8a&units=metric`).then((e=>"400"===e.cod||"404"===e.cod?alert(e.message):void console.log(e)),(e=>{console.log(e)}))}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBS0FBLGVBQWVDLEVBQVdDLEdBQ3hCLE1BQU1DLFFBTlJILGVBQXlCRSxHQUV2QixPQURpQkUsTUFBTUYsRUFBSyxDQUFFRyxLQUFNLFNBS2pCQyxDQUFVSixHQUM3QixPQUFPQyxFQUFLSSxPQ0xILE1BQ1QsTUFBTUMsRUFBWUMsU0FBU0MsY0FBYyxjQUNuQ0MsRUFBZUYsU0FBU0MsY0FBYyxnQkFDL0JELFNBQVNDLGNBQWMsU0FDbkJELFNBQVNDLGNBQWMsYUFDM0JELFNBQVNDLGNBQWMsU0FDaEJELFNBQVNDLGNBQWMsaUJBQ3RCRCxTQUFTQyxjQUFjLGtCQUM3QkQsU0FBU0csaUJBQWlCLGdCQUlsQ0MsU0FBU0MsSUFDZEEsRUFBTUMsaUJBQWlCLFNBQVVDLElBQy9CZixFQUNFLHFEQUFxRGUsRUFBRUMsT0FBT0MsaUVBQzlEQyxNQUFNQyxJQUNOQyxRQUFRQyxJQUFJRixZQUtsQlQsRUFBYUksaUJBQWlCLFNBQVMsS0FDckNkLEVBQ0UscURBQXFETyxFQUFVZSw2REFDL0RKLE1BQ0NDLEdBQ2lCLFFBQVpBLEVBQUlJLEtBQ1EsUUFBWkosRUFBSUksSUFEc0JDLE1BQU1MLEVBQUlNLGNBRXhDTCxRQUFRQyxJQUFJRixLQUViTyxJQUNDTixRQUFRQyxJQUFJSyxVQWhDVCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvTW9kdWxlcy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9Nb2R1bGVzL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSh1cmwpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmVlZGVkRGF0YSh1cmwpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YSh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gIHJldHVybiBkYXRhLmpzb24oKTtcbn1cblxuZXhwb3J0IHsgbmVlZGVkRGF0YSB9O1xuIiwiaW1wb3J0IHsgbmVlZGVkRGF0YSB9IGZyb20gXCIuL2ZldGNoXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hCYXJcIik7XG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnRTZWFyY2hcIik7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvblwiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItaWNvblwiKTtcbiAgY29uc3Qgd2VhdGhlclN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLXN0YXRlXCIpO1xuICBjb25zdCBzdGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3RhdGVdXCIpO1xuXG4gIGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHt9XG5cbiAgc3RhdGVzLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgc3RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBuZWVkZWREYXRhKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2UudGFyZ2V0LmlubmVyVGV4dH0mQVBQSUQ9NTEyZGQ3YzcyMzU2YzNiNzJmMDRhYzdhZjc3ZTlmOGEmdW5pdHM9bWV0cmljYFxuICAgICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuZWVkZWREYXRhKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtzZWFyY2hCYXIudmFsdWV9JkFQUElEPTUxMmRkN2M3MjM1NmMzYjcyZjA0YWM3YWY3N2U5ZjhhJnVuaXRzPW1ldHJpY2BcbiAgICApLnRoZW4oXG4gICAgICAocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuY29kID09PSBcIjQwMFwiKSByZXR1cm4gYWxlcnQocmVzLm1lc3NhZ2UpO1xuICAgICAgICBpZiAocmVzLmNvZCA9PT0gXCI0MDRcIikgcmV0dXJuIGFsZXJ0KHJlcy5tZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0sXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgbG9hZEhvbWVQYWdlIH07XG59KSgpO1xuXG5leHBvcnQgeyBVSSB9O1xuIl0sIm5hbWVzIjpbImFzeW5jIiwibmVlZGVkRGF0YSIsInVybCIsImRhdGEiLCJmZXRjaCIsIm1vZGUiLCJmZXRjaERhdGEiLCJqc29uIiwic2VhcmNoQmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoQnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiaW5uZXJUZXh0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImNvZCIsImFsZXJ0IiwibWVzc2FnZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=