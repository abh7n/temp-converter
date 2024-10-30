const temperatureInput = document.getElementById('temperatureInput');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const resultMessage = document.getElementById('resultMessage');

function checkFieldsandConvert() {
    if (temperatureInput.value && fromUnit.value && fromUnit.value) {
        convertAndDisplayResult();
    } else {
        resultMessage.textContent = '';
    }
}

function convertAndDisplayResult() {
    const temperature = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    const result = convertTemperature(temperature,from,to);
    resultMessage.textContent = `${temperature} ${from} is ${result.toFixed(2)} ${to}`; 
}

function convertTemperature(temp , from , to) {
    let result ;

    if (from === to) {
        return temp;
    }

    if (from === 'Celsius') {
        if (to === 'Fahrenheit') {
            result = (temp * 9/5) + 32;
        } else if (to === 'Kelvin') {
            result = temp + 273.15;
        }
    }

    else if (from === 'Fahrenheit') {
        if (to === 'Celsius') {
            result = (temp - 32) * 5/9;
        } else if (to === 'Kelvin') {
            result = ((temp - 32) * 5/9) + 273.15;
        }
    }

    else if (from === 'Kelvin') {
        if (to === 'Celsius') {
            result = temp - 273.15;
        } else if (to === 'Fahrenheit') {
            result = ((temp - 273.15) * 9/5) + 32;
        }
    }

    return result;

}

function limitLength(input) {
    if (input.value.length > 4) {
      input.value = input.value.slice(0, 4);
    }
}

temperatureInput.addEventListener('input', checkFieldsandConvert);
fromUnit.addEventListener('change', checkFieldsandConvert);
toUnit.addEventListener('change', checkFieldsandConvert);

