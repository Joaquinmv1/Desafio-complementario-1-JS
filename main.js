// FOR
let cantPelicula = parseInt(prompt("Cuantas peliculas queres elegir?"))
let nombrePelicula = "";
let precioPelicula = 0;
let sumaTotal= 0;

for(let i=1; i<=cantPelicula; i++){
    nombrePelicula = prompt(`Introduce el nombre de la pelicula #: ${i}`);
    precioPelicula = parseInt(prompt(`Introduce el precio de la pelicula #: ${i}`));
    alert(`Ingresaste: ${nombrePelicula} $${precioPelicula}`);
    sumaTotal += precioPelicula;
}

alert(`El valor de total es de: $${sumaTotal}`);

// WHILE

// let nombrePelicula2= " ";
// let precioPelicula2 = 0;
// let sumaTotal2= 0;
// let limite = parseInt(prompt("De cuanto es tu limite?"))

// while(nombrePelicula2.toUpperCase() != "SALIR" ){
//     nombrePelicula2 = prompt("Elegi una pelicula:");
//     precioPelicula2 = parseInt(prompt("El precio de la pelicula es:"));
//     alert(`Elegiste ${nombrePelicula2} $${precioPelicula2}`);
//     sumaTotal2 += precioPelicula2;

//     alert(`El valor por el momento es de: ${sumaTotal2}`);

//     if(sumaTotal2 > limite ){
//         break;
//     }
// }

// alert(`El valor total es de: ${sumaTotal2}`)