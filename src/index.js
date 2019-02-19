module.exports = function warmup(temperature) {
  var temperatureFahrenheit = temperature,
      temperatureCelsium = temperatureFahrenheit * 1.8 + 32;

  return temperatureCelsium;
};
