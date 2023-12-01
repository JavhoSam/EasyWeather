export default function ManageData(data) {
    const CityName = data.city_name;
    const Temp = data.temp;
    const Weather = data.weather.description;
  
    document.getElementById('CityLabel').textContent += CityName;
    document.getElementById('Temperature').textContent += Temp;
    document.getElementById('Weather').textContent += Weather;
  }
  