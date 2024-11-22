
/*funcion para validar la opcion del menu*/

function validar(menu){

    while(menu < 1 || menu > 4){

        alert("Opcion invalida,favor de ingresar una opcion del 1 al 4")


        menu = parseInt(prompt(opciones))

       }

     if(menu === 4){
        alert ("Gracias por visitarnos!");
        return false
      }
     
      return true
     
    }


     /*objetos*/


 class claseProductos{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio
    }
 }

 
 const producto1 = new claseProductos(

    "Remeras caciques 1",
    15000

 )
 

 const producto2 =  new claseProductos(
    
    "Remeras caciques 2",
    20000
 )
 

 const producto3 =  new claseProductos(
    
    "buzo caciques",
    25000
 )
 

 const producto4 = new claseProductos(
    
    "campera caciques",
    35000
 )
 


/*funcion para agregar productos*/
function agregarProducto() {
    alert("Ingresa del 1 al 4 qué producto deseas agregar");
    const listaProductos = parseInt(
        prompt("1- Remera Caciques 1\n2- Remera Caciques 2\n3- Buzo Caciques\n4- Campera Caciques")
    );

    while(listaProductos <1  || listaProductos > 4){

        alert("Opcion invalida,favor de ingresar una opcion del 1 al 4")

        agregarProducto()
    }

    switch(listaProductos){
        case 1: 
         alert("Se agrego el siguiente producto: Remeras caciques 1");
         
         productos.push(producto1)

         console.log(productos)


         break

         case 2: 
         alert("Se agrego el siguiente producto: Remeras caciques 2" );
         productos.push(producto2)
         console.log(productos)
         break
         case 3: 
         alert("Se agrego el siguiente producto: buzo caciques" );
         productos.push(producto3)
         console.log(productos)
         break
         case 4: 
         alert("Se agrego el siguiente producto: campera caciques");
         productos.push(producto4)
         console.log(productos)
         break

    }
   
}


/*funcion para calcular el total*/

function totalProductos(){

    let total = 0;

    for(let i=0; i < productos.length; i++){

        total = total + ( productos[i].precio)
    }

    alert ("El total es de $:" + total)
}
/*funcion para buscar el indice de productos*/

function buscarIndiceDeProducto(nombreDeProducto){

    let indice  = -1
    
    for (let i = 0; i < productos.length; i++){

        if(productos[i].nombre.toLowerCase()===nombreDeProducto.toLowerCase()){

            indice = i

            break
        }
    }
     
    return indice

}

/* funcion para eliminar el producto*/
function eliminarProducto(){

    // solicito el nombre a eliminar
      let nombreProducto = prompt("Ingrese el nombre del producto a eliminar");
    // para buscar el indice del producto

      let indiceProducto = buscarIndiceDeProducto ( nombreProducto) ;

      while(indiceProducto === -1){
        alert("El producto no existe") 

        
       nombreProducto = prompt("Ingrese el nombre del producto a eliminar");
      
       indiceProducto = buscarIndiceDeProducto ( nombreProducto)
      }
      

        //elimino el producto
      productos.splice(indiceProducto, 1);
      alert("Se elimino el produco exitosamente!" )
 
      
      console.log(productos)


}

/*inicio del programa*/

const opciones = " En base a los articulos vistos en la pagina elegir entre las siguientes opciones : 1- agregar producto, 2-eliminar producto, 3-sumar todos los productos, 4-Salir "

let menu = parseInt(prompt(opciones));

let productos = []

while(validar(menu)){

   switch(menu){

    case 1:

        //agregar producto;
        agregarProducto();
        
        break;

    case 2: 
      //eliminar producto;
      eliminarProducto()
      break

    case 3:
        //calcular el total;
        totalProductos()
        break
   }

     menu = parseInt(prompt(opciones))
}


