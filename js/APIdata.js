export default function privacy(){
    var API_KEY = "a3fbc0343da0419ead2c2539be68a35d";
    var API_USAGE = "https://api.weatherbit.io/v2.0/subscription/usage?key=";
    var API_URL = "http://api.weatherbit.io/v2.0/forecast/daily";
    let lat = "20.656637665297726";
    let lon = "-105.21483137274211";
    

    let Data = [API_KEY, API_URL, lat, lon, API_USAGE];

    return Data;
    }