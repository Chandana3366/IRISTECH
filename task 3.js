function convertToCelsius() {
    let fahrenheitInput = document.getElementById("fahrenheit");
    let celsiusInput = document.getElementById("celsius");

    if (fahrenheitInput.value) {
        let fahrenheitValue = parseFloat(fahrenheitInput.value);
        let celsiusValue = (fahrenheitValue - 32) * (5 / 9);
        celsiusInput.value = celsiusValue.toFixed(2);
    }
}

function convertToFahrenheit() {
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitInput = document.getElementById("fahrenheit");

    if (celsiusInput.value) {
        let celsiusValue = parseFloat(celsiusInput.value);
        let fahrenheitValue = (celsiusValue * (9 / 5)) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
}