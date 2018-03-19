# fivedayforecast
A five-day weather forecast using openweathermap

## Building the solution

There are only three files in the solution:
1. index.htm
2. js\weather.js
3. css\weather.css

In principle the solution can be hosted on any web server, and will work on any HTML5-compliant browser.

## Functionality

The solution makes use of the openweathermap API to retrieve weather information for the current date and the ensuing five days. Full API documentation may be found here: http://www.openweathermap.org/api.

When the index.htm page is opened, the five-day forecast for the city of Edinburgh (UK) is displayed, with overall meterological conditions, temperature in degrees Celcius and windspeed in miles per hour.

The user then has the option of choosing one of a further ten cities from the dropdown box and displaying the five-day forecast for that city.

Today's weather is displayed for the nearest available time, while for ensuing days the forecast weather at mid-day (local time) is displayed.

## If I had more time...

It would be desirable to add some automated testing, to display more detailed weather information (e.g. max/min temperatures), and perhaps display the next four days' weather on a tabbed display.

It would also be interesting to adapt the Homicide Monitor globe to display weather at any major city around the world (https://homicide.igarape.org.br/)
