let totalCompra = 0;
let precioProducto;

while (true) {
  precioProducto = prompt("Ingrese el precio del producto (o escriba 'total' para obtener el total de la compra):")

  if (precioProducto.toLowerCase() === "total") {
    break
  }

  precioProducto = parseFloat(precioProducto)


  totalCompra += precioProducto;
}

console.log("El precio total de la compra es: " + totalCompra)