let producto = {
    nombre: "Producto",
    precio: 15,
    cantidad: 8
  };
  
  function calcularTotal(producto) {
    let total = (producto.precio * producto.cantidad)
    console.log(total)
  }
  
  calcularTotal(producto)
  
  
  
  let persona = {
    nombre: "Fabian",
    edad: 18,
    profesion: "estudiante"
  };
  
  function presentarPersona(persona) {
  console.log("El nombre de la persona es: " + persona.nombre)
    console.log("La edad de la persona es: " + persona.edad)
    console.log("La profesión de la persona es: " + persona.profesion)
  }
  
  presentarPersona(persona)
  
  
  let persona1 = {
    nombre: "Fabian",
    edad: 18,
    profesion: "estudiante"
  };
  function esMayorEdad (persona1){
  if (persona1.edad>=18){
    console.log (true);
  } else{
    console.log (false);
  }
  
  }
  esMayorEdad(persona1)
  