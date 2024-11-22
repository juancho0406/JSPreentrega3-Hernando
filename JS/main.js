

/*solicitud de Nombre*/

let nombre;

while (true) {
  nombre = prompt("Por favor, ingresa tu nombre:");

  if (isNaN(nombre)) {
    alert("Bienvenido" + " " + nombre + "!");
    break;
  } else {
    alert("Error: Por favor, ingresa un nombre válido (sin números).");
  }
}

/* pregunta el presupuesto y segun el valor ingresado le dice cuantos articulos puede compra*/

let presupuesto;

while (true){

    presupuesto = prompt("ingresa tu presupuesto")

    if (isNaN(presupuesto)) {
        alert("Error: Por favor, ingresa un numero válido.");
        
    }
        else if (presupuesto < 15000){
          alert("No tenes suficiente dinero para comprar, vuelve mas tarde")
        break
        }
        else if (presupuesto >! 15000 ){
            alert("bienvenido a nuestra tienda!")
            break
        }
        
    
    }


