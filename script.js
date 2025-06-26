const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const countryEl = document.querySelector(".country");
const weatherEl = document.querySelector(".weather");
const tempEl = document.querySelector(".temp");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();
  if (!city) return;

  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=48128e95c64843f692252553252606&q=${city}&aqi=no`);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    countryEl.textContent = `Country: ${data.location.country}`;
    weatherEl.textContent = `Condition: ${data.current.condition.text}`;
    tempEl.textContent = `Temperature: ${data.current.temp_c}°C`;
  } catch (error) {
    countryEl.textContent = "City not found or invalid input.";
    weatherEl.textContent = "";
    tempEl.textContent = "";
  }
});
