const convertBtn = document.querySelector("#convert-btn");
const inputValue = document.querySelector("#input-value");
const inputUnit = document.querySelector("#input-unit");
const outputValue = document.querySelector("#output-value");
const outputUnit = document.querySelector("#output-unit");

function convertTemperature() {
  const inputTemp = parseFloat(inputValue.value);
  let outputTemp;

  if (inputUnit.value === "celsius") {
    if (outputUnit.value === "fahrenheit") {
      outputTemp = (inputTemp * 9) / 5 + 32;
    } else if (outputUnit.value === "kelvin") {
      outputTemp = inputTemp + 273.15;
    } else {
      outputTemp = inputTemp;
    }
  } else if (inputUnit.value === "fahrenheit") {
    if (outputUnit.value === "celsius") {
      outputTemp = ((inputTemp - 32) * 5) / 9;
    } else if (outputUnit.value === "kelvin") {
      outputTemp = ((inputTemp - 32) * 5) / 9 + 273.15;
    } else {
      outputTemp = inputTemp;
    }
  } else if (inputUnit.value === "kelvin") {
    if (outputUnit.value === "celsius") {
      outputTemp = inputTemp - 273.15;
    } else if (outputUnit.value === "fahrenheit") {
      outputTemp = ((inputTemp - 273.15) * 9) / 5 + 32;
    } else {
      outputTemp = inputTemp;
    }
  }

  outputValue.value = outputTemp.toFixed(2);
}

convertBtn.addEventListener("click", convertTemperature);
