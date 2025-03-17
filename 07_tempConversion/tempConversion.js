const convertToCelsius = function(tempF) {
  let celcius = (tempF -32) / (9/5)
  return Math.round(celcius * 10) / 10 
};

const convertToFahrenheit = function(tempC) {
  let farenheit = tempC * 1.8 +32
  return  Math.round(farenheit * 10) / 10 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
