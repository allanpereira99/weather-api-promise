# weather-api-promise

## Usage 
```
const { weather } = require('weather-api-promise');

//find locale 
weather.locale('feira de santana'); //will return an object with location information or locations if there is more than one with name.

//find weather forecast 
weather.forecast(1976) // returns an array of object with the weather forecast for the next 7 days.

//find Current weather conditions in capital cities.
weather.capitals(); //returns an array of object with conditions in capitals.
