let temperatura = parseFloat(prompt("Ingrese la temperatura:"))
let unidad = prompt("Ingrese la unidad de medida de temperatura (Celsius o Fahrenheit):")
let temperaturaConvertida;

function convertirCelsiusAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convertirFahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

if (unidad === "celsius") {
  temperaturaConvertida = convertirCelsiusAFahrenheit(temperatura)
  console.log(temperatura + " grados Celsius equivale a " + temperaturaConvertida + " grados Fahrenheit.")
} else if (unidad === "fahrenheit") {
  temperaturaConvertida = convertirFahrenheitACelsius(temperatura)
  console.log(temperatura + " grados Fahrenheit equivale a " + temperaturaConvertida + " grados Celsius.")
}
