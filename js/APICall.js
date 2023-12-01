//Imports and Exports
import privacy from './APIdata.js';
import fetchData from './APIFetch.js';
import fetchUsage from './Usage.js';

//Call API data from function
let data = privacy();

//assign API data values to variables
let API_KEY = data[0];
let API_URL = data[1];
let LATITUDE = data[2];
let LONGITUDE = data[3];

//Call yo API usage information
fetchUsage("https://api.weatherbit.io/v2.0/subscription/usage?key=", API_KEY);

//Call to API fetch function
//fetchData(API_KEY, API_URL, LATITUDE, LONGITUDE);









