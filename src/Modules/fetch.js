async function fetchData(url) {
  const response = fetch(url, { mode: "cors" });
  return response;
}

async function neededData(url) {
  const data = await fetchData(url, { mode: "cors" });
  return data.json();
}

export { neededData };
