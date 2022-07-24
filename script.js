document.addEventListener('DOMContentLoaded', () => {
  
  let temperature
  let unit = 'C';
  let result
  
  const form = document.querySelector('form')
  const tempInput = document.querySelector('input[type="number"]')
  const inputUnit = document.querySelector('#inputUnit p')
  const unitSwitch = document.querySelector('#toggleButton')
  const resultBox = document.querySelector('#result p')
  const resultUnitBox = document.querySelector('#resultUnit p')
  const convertCelsius = celsius => Math.round(celsius * 9 / 5 + 32);
  const convertFahrenheit = fahrenheit => Math.round((fahrenheit - 32) * 5 / 9);
  
  tempInput.addEventListener('focus', event => {
    resultBox.textContent = ''
  })  
/*
  tempInput.addEventListener('input', event => {
    temperature = tempInput.value
    resultBox.textContent = ''
  })
*/
  unitSwitch.addEventListener('click', (event) => {
    event.preventDefault();
    resultBox.textContent = ''
    resultUnitBox.textContent = `°${unit}`
    if (unit === 'C') {
      unit = 'F'
      tempInput.setAttribute("min", "-459")
    } else {
      unit = 'C'
      tempInput.setAttribute("min", "-273")
    }
    inputUnit.textContent = `°${unit}`
  })
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    unit === 'C' ? result = convertCelsius(tempInput.value) : result = convertFahrenheit(tempInput.value)
    resultBox.textContent = result
  });
});