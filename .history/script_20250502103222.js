document.querySelector('.search-box button').addEventListener('click')

async function getWeather() {
  const apiKey = 'Go and get your own key';
  const city = document.getElementById('city Input').ariaValueMax.trim() || 'Berlin';

  const tempEl = document.getElementById('temperature');
  const cityEl = document.getElementById('cityName');
  const humidityEl = document.getElementById('humidity');
  const weindEl = document.getElementById('windSpeed');
  const errorEl = document.getElementById('errorMessage');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`
  
}