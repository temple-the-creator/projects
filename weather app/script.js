function getCity() {
  const searchBar = document.querySelector('#search__bar');
  return searchBar ? searchBar.value : '';
}
let city = getCity(); 

const search = document.querySelector('.search__btn');
search.addEventListener('click', () => {
  city = getCity();
  
  async function getWeather(city, unit = "celsius") {
  // 1. Find the city
  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  );
  const geoData = await geoRes.json();

  if (!geoData.results) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name, country } = geoData.results[0];

  // 2. Get the weather
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}&longitude=${longitude}` +
    `&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
    `&forecast_days=5&timezone=auto&temperature_unit=${unit}`;

  const res = await fetch(url);
  const data = await res.json();

  return { name, country, data };
 }

 getWeather(getCity()).then(({ name, country, data }) => {
    console.log(name, country);
    console.log(data.current.temperature_2m);
    console.log(data.daily.temperature_2m_max); 
  })
  .catch(err => console.error(err.message));
});



