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
