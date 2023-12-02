//Imports and Exports
import privacy from './APIdata.js';
import fetchData from './APIFetch.js';
import fetchUsage from './Usage.js';
import ManageData from './ViewData.js';
import GetWeekDay from './WeekDays.js';

//Call WeekDays change function
GetWeekDay();

//Call API data from function
let data = privacy();

//assign API data values to variables
let API_KEY = data[0];
let API_URL = data[1];
let LATITUDE = data[2];
let LONGITUDE = data[3];
let API_USAGE = data[4];

//Call yo API usage information
fetchUsage(API_USAGE, API_KEY);

//Call to API fetch function
fetchData(API_KEY, API_URL, LATITUDE, LONGITUDE);
