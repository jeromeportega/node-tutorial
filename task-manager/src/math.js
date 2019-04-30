const calculateTip = (total, tipPercent = .25) => total + (total * tipPercent);

const fahrenheitToCelsius = temp => (temp - 32) / 1.8;

const celsiusToFahrenheit = temp => 32 + (temp * 1.8);

module.exports = {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
}