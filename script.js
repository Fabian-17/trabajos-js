let edad = parseInt(prompt('Ingrese la edad:'));
function esMayorEdad (edad){
if (edad>=18){
  console.log (true);
} else{
  console.log (false);
}

}
esMayorEdad(edad)





let base = prompt('ingrese la base')
let altura = prompt('ingrese la altura')
function calcularAreaRectangulo (base, altura){
let area = base*altura
console.log(area);

}
calcularAreaRectangulo(Number(base), Number(altura));




let palabra = prompt('Ingrese la palabra')
function esPalindromo (palabra){
let palabraAlReves = palabra.split('').reverse().join('')
if (palabra === palabraAlReves) {
  console.log (true)
}else{
  
console.log (false)
  
}
}
esPalindromo (palabra)



let numero = generarNumeroAleatorio ()
function generarNumeroAleatorio (){
  console.log (Math.floor(Math.random() * 10) + 1);

}
console.log(numero)



let numeros = [5, 7, 1, 10, 23]
let suma = 0;
function obtenerSumas(numeros) {

  
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
  }
  
  console.log(suma)
}
obtenerSumas(numeros)




let numeros2 = [ 2, 5, 7, 13, 24, 33, 44]
function obtenerPares(numeros2) {
  let pares = [];
  
  for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] % 2 === 0) {
      pares.push(numeros2[i])
    }
  }
  
  console.log(pares)
}

obtenerPares(numeros2)



let notas = [6, 8, 10]
let pesos = [56, 68, 52]
let sumaNotasPesos = 0
let sumaPesos = 0
function obtenerPromedioPonderado(notas, pesos) {

  for (let i = 0; i < notas.length; i++) {
    sumaNotasPesos += notas[i] * pesos[i]
    sumaPesos += pesos[i]
  }

  let promedioPonderado = sumaNotasPesos / sumaPesos
  console.log(promedioPonderado)
}

obtenerPromedioPonderado(notas, pesos)



let numero3 = [5, 33, 45, 1, 17];
function obtenerMaximo(numero3) {

  let maximo = numero3[0];

  for (let i = 1; i < numero3.length; i++) {
    if (numero3[i] > maximo) {
      maximo = numero3[i];
    }
  }

  console.log(maximo);
}

obtenerMaximo(numero3)