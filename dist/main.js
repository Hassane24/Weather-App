(()=>{"use strict";async function e(e){const t=await async function(e){return fetch(e,{mode:"cors"})}(e);return t.json()}(()=>{const t=document.querySelector("#searchBar"),c=document.querySelector("#startSearch");document.querySelector("#temp"),document.querySelector("#location"),document.querySelector("#date"),document.querySelector("#weather-icon"),document.querySelector("#weather-state"),document.querySelectorAll("[data-state]").forEach((t=>{t.addEventListener("click",(t=>{e(`https://api.openweathermap.org/data/2.5/weather?q=${t.target.innerText}&APPID=512dd7c72356c3b72f04ac7af77e9f8a&units=metric`).then((e=>{console.log(e)}))}))})),c.addEventListener("click",(()=>{e(`https://api.openweathermap.org/data/2.5/weather?q=${t.value}&APPID=512dd7c72356c3b72f04ac7af77e9f8a&units=metric`).then((e=>(console.log(e),"400"===e.cod||"404"===e.cod?console.log(e.message):void 0)),(e=>{console.log(e)}))}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBS0FBLGVBQWVDLEVBQVdDLEdBQ3hCLE1BQU1DLFFBTlJILGVBQXlCRSxHQUV2QixPQURpQkUsTUFBTUYsRUFBSyxDQUFFRyxLQUFNLFNBS2pCQyxDQUFVSixHQUM3QixPQUFPQyxFQUFLSSxPQ0xILE1BQ1QsTUFBTUMsRUFBWUMsU0FBU0MsY0FBYyxjQUNuQ0MsRUFBZUYsU0FBU0MsY0FBYyxnQkFDL0JELFNBQVNDLGNBQWMsU0FDbkJELFNBQVNDLGNBQWMsYUFDM0JELFNBQVNDLGNBQWMsU0FDaEJELFNBQVNDLGNBQWMsaUJBQ3RCRCxTQUFTQyxjQUFjLGtCQUM3QkQsU0FBU0csaUJBQWlCLGdCQUlsQ0MsU0FBU0MsSUFDZEEsRUFBTUMsaUJBQWlCLFNBQVVDLElBQy9CZixFQUNFLHFEQUFxRGUsRUFBRUMsT0FBT0MsaUVBQzlEQyxNQUFNQyxJQUNOQyxRQUFRQyxJQUFJRixZQUtsQlQsRUFBYUksaUJBQWlCLFNBQVMsS0FDckNkLEVBQ0UscURBQXFETyxFQUFVZSw2REFDL0RKLE1BQ0NDLElBQ0NDLFFBQVFDLElBQUlGLEdBQ0ksUUFBWkEsRUFBSUksS0FDUSxRQUFaSixFQUFJSSxJQURzQkgsUUFBUUMsSUFBSUYsRUFBSUssY0FDOUMsS0FFREMsSUFDQ0wsUUFBUUMsSUFBSUksVUFoQ1QsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL01vZHVsZXMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvTW9kdWxlcy9VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEodXJsKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5lZWRlZERhdGEodXJsKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEodXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICByZXR1cm4gZGF0YS5qc29uKCk7XG59XG5cbmV4cG9ydCB7IG5lZWRlZERhdGEgfTtcbiIsImltcG9ydCB7IG5lZWRlZERhdGEgfSBmcm9tIFwiLi9mZXRjaFwiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoQmFyXCIpO1xuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0U2VhcmNoXCIpO1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpO1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb25cIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLWljb25cIik7XG4gIGNvbnN0IHdlYXRoZXJTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlci1zdGF0ZVwiKTtcbiAgY29uc3Qgc3RhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXN0YXRlXVwiKTtcblxuICBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7fVxuXG4gIHN0YXRlcy5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgIHN0YXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbmVlZGVkRGF0YShcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtlLnRhcmdldC5pbm5lclRleHR9JkFQUElEPTUxMmRkN2M3MjM1NmMzYjcyZjA0YWM3YWY3N2U5ZjhhJnVuaXRzPW1ldHJpY2BcbiAgICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmVlZGVkRGF0YShcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7c2VhcmNoQmFyLnZhbHVlfSZBUFBJRD01MTJkZDdjNzIzNTZjM2I3MmYwNGFjN2FmNzdlOWY4YSZ1bml0cz1tZXRyaWNgXG4gICAgKS50aGVuKFxuICAgICAgKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBpZiAocmVzLmNvZCA9PT0gXCI0MDBcIikgcmV0dXJuIGNvbnNvbGUubG9nKHJlcy5tZXNzYWdlKTtcbiAgICAgICAgaWYgKHJlcy5jb2QgPT09IFwiNDA0XCIpIHJldHVybiBjb25zb2xlLmxvZyhyZXMubWVzc2FnZSk7XG4gICAgICB9LFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiB7IGxvYWRIb21lUGFnZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgVUkgfTtcbiJdLCJuYW1lcyI6WyJhc3luYyIsIm5lZWRlZERhdGEiLCJ1cmwiLCJkYXRhIiwiZmV0Y2giLCJtb2RlIiwiZmV0Y2hEYXRhIiwianNvbiIsInNlYXJjaEJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaEJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImlubmVyVGV4dCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJjb2QiLCJtZXNzYWdlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==