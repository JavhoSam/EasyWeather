export default function ManageData(data) {

    console.log(data);
    data = data['data'][0];

    let Temp = Math.ceil(data["temp"]);
    let Weather = data["weather"]["description"];
    let WeatherLogo = "../assets/icons/" + data["weather"]["icon"] + ".png" ;

    let Precipitation = data["pop"];
    let AppHighTemp = data["app_max_temp"];
    let AppLowTemp = data["app_min_temp"];
    let AppTemp = Math.ceil((AppHighTemp + AppLowTemp) / 2);
    let Max = Math.ceil(data["max_temp"]);
    let Min = Math.ceil(data["min_temp"]);


    document.getElementById('WeatherDescLogo').src = WeatherLogo;
    document.getElementById('TemperatureLabel').textContent += Temp + "°";
    document.getElementById('WeatherLogoDescription').textContent +=  Weather;

    document.getElementById('PrecProp').textContent +=  Precipitation + "%";
    document.getElementById('TermSen').textContent +=  AppTemp + "°";
    document.getElementById('MaxTemp').textContent +=  Max + "°";
    document.getElementById('MinTemp').textContent +=  Min + "°";
  }
  