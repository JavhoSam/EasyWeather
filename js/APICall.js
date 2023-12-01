//Imports and Exports
import privacy from './APIdata.js';
import fetchData from './APIFetch.js';
import fetch from './APIFetch.js';

//Call API data from function
let data = privacy();

//assign API data values to variables
let API_KEY = data[0];
let API_URL = data[1];
let LATITUDE = data[2];
let LONGITUDE = data[3];

//Call to API fetch function
let DataJSON = fetchData(API_KEY, API_URL, LATITUDE, LONGITUDE);

console.log(DataJSON);








