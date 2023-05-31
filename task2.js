let numero = parseInt(prompt('Ingrese un número:'))

function esPrimo(numero) {

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false
    }
  }

  return true
}

if (esPrimo(numero)) {
  console.log(numero + ' es un número primo.')
} else {
  console.log(numero + ' no es un número primo.')
}
