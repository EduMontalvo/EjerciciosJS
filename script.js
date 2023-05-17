/* 4. Ejercicio de filter:
Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números pares. */


let arreglo4 = [28, 9, 14];

let numerosPares4 = arreglo4.filter( numero => numero % 2 == 0 );

console.log(numerosPares4);

/* 5. Ejercicio de reduce:
Dado un arreglo de números, utiliza el método `reduce` para calcular la suma de todos los elementos del arreglo. */


let arregloNumeros = [28, 9, 14];
let sumaNumeros1 = arregloNumeros.reduce((contador, numero) => {
    return contador += numero;
}, 0);

/* console.log(`la suma de todos los numeros del arregle es ${sumaNumeros1}`); */

/* ó */
let sumaNumeros2 = arregloNumeros.reduce((contador, numero) => contador += numero,0);

/* console.log(sumaNumeros2); */


/* 6. Ejercicio combinado:
Dado un arreglo de palabras, utiliza un bucle y condicionales para crear un nuevo arreglo que contenga solo las palabras que tienen más de 5 caracteres. Luego, utiliza el método `map` para convertir cada palabra en mayúsculas. */

let arregloPalabras = ["mouse", "teclado", "monitor", "gato", "perro", "ropa", "ice"];

let arregloSolicitado = arregloPalabras.filter(palabra => {
    if (palabra.length >= 5) {
        return palabra;
    }
});
/* console.log(arregloSolicitado); */
let convertirMayuscula = arregloSolicitado.map(elemento => {
    return elemento.toUpperCase();
});
/* console.log(convertirMayuscula); */

/* 7. Ejercicio combinado:
Dado un arreglo de objetos que representan productos, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los productos que están en stock (es decir, aquellos cuya propiedad `stock` sea verdadera). Luego, utiliza el método `reduce` para calcular el precio total de todos los productos en stock. */

let arreglo7 = [{ nombre: "smartphone", stock: true, precio: 900 },
{ nombre: "teclado", stock: false, precio: 120 },
{ nombre: "mouse", stock: true, precio: 50 },
{ nombre: "cargador", stock: true, precio: 90 },
{ nombre: "mochila", stock: false, precio: 60 }
];
let seleccionandotrueStock = arreglo7.filter(producto => {
    if (producto.stock == true) {
        return producto;
    }
});
let sumaPrecios = seleccionandotrueStock.reduce((acumulador, producto) => {
    return acumulador += producto.precio;
}, 0);

/*  console.log(sumaPrecios); */

/* 8. Ejercicio de bucles:
Escribe un bucle que imprima los números del 10 al 1 en la consola, en orden descendente. */


for(let i = 10;i>=1;i--){
    /* console.log(i); */
}

/* 9. Ejercicio de condicionales:
Escribe una función que tome un número como argumento y devuelva "Positivo" si el número es mayor que 0, "Negativo" si el número es menor que 0, y "Cero" si el número es igual a 0. */

let queEs = numero => {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}
/* console.log(queEs(1));
console.log(queEs(-1));
console.log(queEs(0)); */

/* 10. Ejercicio de map:
Dado un arreglo de palabras, utiliza el método `map` para crear un nuevo arreglo que contenga la longitud de cada palabra. */

let arreglo10 = ["audifonos", "monitor", "teclado", "mouse", "pc"];

let longitudPalabra = arreglo10.map(palabra => {
    return palabra.length;
});

/* console.log(longitudPalabra); */

/* 11. Ejercicio de filter:
Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números mayores que 5.*/

let arreglo11 = [5, 9, 6, 7, 12, 6, 3, 4, 98, 5, 46, 7, 1, 6, 5, 9, 4, 3, 1, 1, 6, 87];

let mayoresQue5 = arreglo11.filter(numero => {
    if (numero > 5) {
        return numero;
    }
});

/* console.log(mayoresQue5); */

/*1. Ejercicio combinado:
Dado un arreglo de nombres, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres que comienzan con la letra "A". Luego, utiliza el método `reduce` para concatenar todos los nombres en una sola cadena separada por comas. */

let arreglo11_1 = ["Eduardo","Carlos","Fiorella","Estefany","Manuel","Alejandro","Abel","Angela"];

let empiezaConAConcatenar = arreglo11_1.filter(nombre => nombre.startsWith("A")).reduce( (total, nombre) => total += "," + nombre);

/* console.log(empiezaConAConcatenar); */



/* 12. Ejercicio de reduce:
Dado un arreglo de números, utiliza el método `reduce` para calcular el producto de todos los elementos del arreglo. */


let arreglo12 = [2, 6, 2, 20, 42, 35, 6, 1, 7, 9, 4, 2, 1];


let productoNumeros = arreglo12.reduce((acumulador, numero) => {
    return acumulador *= numero
});

/* console.log(productoNumeros);
 */
/* 13. Ejercicio combinado:
Dado un arreglo de objetos que representan estudiantes, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los estudiantes que tienen una calificación mayor o igual a 80. Luego, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres de esos estudiantes. */

let arreglo13 = [
    { nombre: "Eduardo", calificacion: 50 },
    { nombre: "Manuel", calificacion: 95 },
    { nombre: "Fiorella", calificacion: 92 },
    { nombre: "Alejandro", calificacion: 94 },
    { nombre: "Carlos", calificacion: 78 },
    { nombre: "Leon", calificacion: 80 }
]

let mayorQue80 = arreglo13.filter(estudiante => {
    if (estudiante.calificacion >= 80) {
        return estudiante;
    }
});

/* console.log(mayorQue80); */



/* 14. Ejercicio combinado:
Dado un arreglo de palabras, utiliza el método `filter` para crear un nuevo arreglo que contenga solo las palabras que contienen la letra "a". Luego, utiliza el método `map` para convertir cada palabra en minúsculas. */

let arreglo14 = ["TieRRa", "CielO", "SuN", "LuNa"];

let palabrasconlaletraA = arreglo14.filter(palabra => {
    if (palabra.includes("a")) {
        return palabra;
    }
});

/* console.log(palabrasconlaletraA); */

let convertirMinuscula = palabrasconlaletraA.map(palabra => {
    return palabra.toLowerCase();
});

/* console.log(convertirMinuscula); */



/* 15. Ejercicio combinado:
Dado un arreglo de objetos que representan libros, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los libros cuyo autor sea "J.K. Rowling". Luego, utiliza el método `reduce` para calcular la suma de las páginas de todos los libros seleccionados. */

let arreglo15 = [{ libro: "CCNA", autor: "Walker Schmidt", paginas: 180 },
{ libro: "ITILv4", autor: "Mr Scott Tunn", paginas: 90 },
{ libro: "The Art of Intrusion", autor: "Kevin D. Mitnick ", paginas: 140 },
{ libro: "Harry The Dirty Potter Vol1", autor: "J.K. Rowling", paginas: 163 },
{ libro: "Harry The Dirty Potter Vol2", autor: "J.K. Rowling", paginas: 270 }
];

let autorRowling = arreglo15.filter(libro => {
    if (libro.autor == "J.K. Rowling") {
        return libro;
    }
});

let paginasLibro = autorRowling.reduce((contador, libro) => {
    return contador += libro.paginas;
}, 0);

/* console.log(paginasLibro); */


/* 16. Ejercicio de bucles:
Escribe un bucle que imprima los números pares del 1 al 20 en la consola. */

for (let numb = 1; numb <= 20; numb++) {
    if (numb % 2 == 0) {
        /* console.log(numb); */
    }
}

/* 17. Ejercicio de condicionales:
Escribe una función que tome una cadena como argumento y devuelva "Es una frase" si la cadena contiene espacios en blanco, y "Es una palabra" si la cadena no contiene espacios en blanco. */

let tieneEspacioCadena = (cadena) => {
    if (cadena.includes(" ")) {
        return "Es una frase";
    } else {
        return "Es una palabra";
    }
}


/* console.log(tieneEspacioCadena("Hola que hace")); */


/* 18. Ejercicio de map:
Dado un arreglo de nombres, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres en mayúsculas. */

let arreglo18 = ["edu","fio","manu","leon","maria"];

/* let nombreenMayusculas = arreglo18.filter( nombre => {
    if(nombre === nombre.toUpperCase()){
        return nombre;
    }
}); */

let nombreenMayusculas = arreglo18.map( nombre => nombre.toUpperCase());

/* console.log(nombreenMayusculas); */



/* 19. Ejercicio de filter:
Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números impares. */

let arreglo19 = [9, 8, 45, 62, 68, 93, 74, 54, 12, 94, 78, 82, 81, 86, 85, 2];

let numerosImpares = arreglo19.filter(numero => {
    if (numero % 2 != 0) {
        return numero;
    }
});

/* console.log(numerosImpares); */


/* 20. Ejercicio de reduce:
Dado un arreglo de palabras, utiliza el método `reduce` para calcular la cantidad total de caracteres de todas las palabras en el arreglo. */

let arreglo20 = ["Edu", "Carlos", "Manuel"];

let cantidadCaracteres = arreglo20.reduce((acumulador, nombre) => {
    return acumulador += nombre;
});

/* console.log(cantidadCaracteres.length); */



/* 21. Ejercicio combinado:
Dado un arreglo de objetos que representan productos, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los productos cuyo precio sea mayor a $50. Luego, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres de esos productos. */

let arreglo21 = [{ nombre: "smartphone", precio: 900 },
{ nombre: "teclado", precio: 120 },
{ nombre: "mouse", precio: 50 },
{ nombre: "cargador", precio: 90 },
{ nombre: "mochila", precio: 30 }
];

let precioMayorque50 = arreglo21.filter(producto => {
    if (producto.precio >= 50) {
        return producto;
    }
});

let nombredeProductos50 = precioMayorque50.map(producto => {
    return producto.nombre;
});

/* console.log(nombredeProductos50); */

/* 22. Ejercicio combinado:
Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números que sean múltiplos de 3. Luego, utiliza el método `reduce` para calcular la suma de los números seleccionados. */


let arreglo22 = [9, 8, 45, 62, 68, 93, 74, 54, 12, 94, 78, 82, 81, 86, 85, 2];

let multiplosde3 = arreglo22.filter(numero => {
    if (numero % 3 == 0) {
        return numero;
    }
});

let sumadeMultiplos3 = multiplosde3.reduce((acumulador, numero) => {
    return acumulador += numero;
});

/* console.log(sumadeMultiplos3); */


/* 23. Ejercicio combinado:
Dado un arreglo de objetos que representan estudiantes, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los estudiantes que tienen una calificación promedio mayor o igual a 90. Luego, utiliza el método `reduce` para calcular el promedio de las calificaciones de los estudiantes seleccionados. */

let arreglo23 = [
    { nombre: "Eduardo", calificacion1: 50 },
    { nombre: "Manuel", calificacion1: 95, calificacion2: 30 },
    { nombre: "Fiorella", calificacion1: 92, calificacion2: 10 },
    { nombre: "Alejandro", calificacion1: 94, calificacion2: 90 },
    { nombre: "Carlos", calificacion2: 90 },
    { nombre: "Leon", calificacion1: 70, calificacion2: 98 }
]

//Solucion N°1

/* let mayorIgual90 = arreglo23.filter( estudiante =>{
    let sumaPromedio = 0;
    if(estudiante.calificacion1 && estudiante.calificacion2){
        sumaPromedio = (estudiante.calificacion1 + estudiante.calificacion2)/2
    }else if(estudiante.calificacion1){
        sumaPromedio = estudiante.calificacion1;
    }else{
        sumaPromedio = estudiante.calificacion2;
    }
    if(sumaPromedio >= 90){
        return estudiante;
    }
});

console.log(mayorIgual90);

let promedioCalificaciones = mayorIgual90.reduce((acumulador ,estudiante) => {
    let promedioNota = 0;
    if(estudiante.calificacion1 && estudiante.calificacion2){
        promedioNota = (estudiante.calificacion1 + estudiante.calificacion2)/2
    }else if(estudiante.calificacion1){
        promedioNota = estudiante.calificacion1;
    }else{
        promedioNota = estudiante.calificacion2;
    }
    return acumulador += promedioNota;
},0);

console.log(promedioCalificaciones); */


//Solucion N°2

function CalcularPromedio(nota1, nota2) {
    let sumaPromedio = 0;
    if (nota1 && nota2) {
        sumaPromedio = (nota1 + nota2) / 2
    } else if (nota1) {
        sumaPromedio = nota1;
    } else {
        sumaPromedio = nota2;
    }
    return sumaPromedio;
}

let mayorIgual90 = arreglo23.filter(estudiante => {
    let valorPromedio = CalcularPromedio(estudiante.calificacion1, estudiante.calificacion2);
    if (valorPromedio >= 90) {
        return estudiante;
    }
});

/* console.log(mayorIgual90); */

let promedioCalificaciones = mayorIgual90.reduce((acumulador, estudiante) => {
    let promedioNota = CalcularPromedio(estudiante.calificacion1, estudiante.calificacion2);
    return acumulador += promedioNota;
}, 0);

/* console.log(promedioCalificaciones); */

/* 24. Ejercicio de bucles:
Escribe un bucle que imprima la serie de Fibonacci hasta el décimo término. (La serie de Fibonacci comienza con 0 y 1, y cada término siguiente es la suma de los dos anteriores). 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 */

function SerieFibonacci(numero) {
    let inicioSerie = [0, 1];
    for (let indice = 2; indice <= numero; indice++) {
        let numeroSiguiente = inicioSerie[indice - 1] + inicioSerie[indice - 2];
        inicioSerie.push(numeroSiguiente);
    }
    return inicioSerie;
}

/* console.log(SerieFibonacci(10)); */

/* 25. Ejercicio de condicionales:
Escribe una función que tome una cadena como argumento y devuelva "Es un palíndromo" si la cadena es igual al revés, y "No es un palíndromo" si no lo es. */

function esPalindromo(cadena){
    let acumulador = "";
    for(let index = 1 ; index <= cadena.length ; index++){
        acumulador += cadena[cadena.length - index]
    }
    if( acumulador == cadena ){
        return `Es palindromo porque ${acumulador} y ${cadena} son iguales`
    }else{
        return `No es palindromo porque ${acumulador} y ${cadena} son diferentes`
    }
}

/* console.log(esPalindromo("moom"));
 */


/* 26. Ejercicio de map:
Dado un arreglo de números, utiliza el método `map` para crear un nuevo arreglo que contenga el doble de cada número. */

let arreglo26 = [9, 8, 45, 62, 68, 2];

let dobleNumero = arreglo26.map(numero => {
    return numero * 2;
});

/* console.log(dobleNumero); */

/* 27. Ejercicio de filter:
Dado un arreglo de palabras, utiliza el método `filter` para crear un nuevo arreglo que contenga solo las palabras que tengan más de 4 caracteres. */

let arreglo27 = ["TieRRa", "CielO", "SuN", "LuNa"];

let palabraMasde4 = arreglo27.filter(palabra => {
    if (palabra.length > 4) {
        return palabra
    }
});

/* console.log(palabraMasde4); */

/* 28. Ejercicio de reduce:
Dado un arreglo de números, utiliza el método `reduce` para calcular el producto de los números pares. */

const numeros = [1, 2, 3, 4, 5, 6];
const productoPares = numeros.filter(numero => numero % 2 === 0).reduce((a, b) => {
    return a * b;
});
/* console.log(productoPares); */



/* 29. Ejercicio combinado:
Dado un arreglo de objetos que representan empleados, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los empleados con un salario mayor a $5000. Luego, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres de los empleados seleccionados. */

let arreglo29 = [
    { nombre: "Eduardo", salario: 8000 },
    { nombre: "Leon", salario: 4500 },
    { nombre: "Alejandro", salario: 5300 }
]

let mayorSalarioMayor5000 = arreglo29.filter(empleado => empleado.salario > 5000).map(empleado => empleado.nombre);

/* console.log(mayorSalarioMayor5000); */


/* 30. Ejercicio combinado:
Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números que sean divisibles por 5 y mayores a 10. Luego, utiliza el método `reduce` para calcular la suma de los números seleccionados. */


let arreglo30 = [9, 8, 45, 65, 68, 2];

let divisiblePor5yMayor10 = arreglo30.filter(numero => numero % 5 == 0 && numero > 10).reduce((acumulador, numero) => acumulador += numero);


/* console.log(divisiblePor5yMayor10); */



/* 31. Ejercicio combinado:
Dado un arreglo de objetos que representan productos, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los productos en stock con un precio menor a $100. Luego, utiliza el método `reduce` para calcular el precio total de los productos seleccionados. */

let arreglo31 = [
    { nombre: "smartphone", stock:true, precio: 900 },
    { nombre: "teclado", stock:false, precio: 120 },
    { nombre: "mouse", stock:true, precio: 50 },
    { nombre: "cargador", stock:true, precio: 90 },
    { nombre: "mochila", stock:false, precio: 30 }
];

let enStockMenor100 = arreglo31.filter( producto => producto.stock == true && producto.precio < 100).reduce((total, producto) => total += producto.precio,0);


/* console.log(enStockMenor100); */

/* 32. Ejercicio de bucles:
Escribe un bucle que imprima los números impares del 1 al 50 en la consola. */

let primeros50 = 1;

while( primeros50 < 51 ){
    if( primeros50 % 2 != 0){
        /* console.log(primeros50); */
    }
    primeros50++;
}

/* 33. Ejercicio de condicionales:
Escribe una función que tome dos números como argumentos y devuelva el mayor de los dos. */

/* numero1 = 5 */
/* numero2 = 7 */

function Mayorde2(numero1, numero2){
    let mayor = 0;
    if(numero1 - numero2 > 0){
        mayor = numero1;
    }else{
        mayor = numero2;
    }
    return `El numero mayor entre ${numero1} y ${numero2} es ${mayor}`;
}

/* console.log(Mayorde2(25,200)); */


/* 34. Ejercicio de map:
Dado un arreglo de palabras, utiliza el método `map` para crear un nuevo arreglo que contenga la primera letra de cada palabra. */


let arreglo34 = ["Tierra", "Cielo", "Sol", "Luna"];

let primeraLetra = arreglo34.map( palabra => palabra.charAt(0));

/* console.log(primeraLetra); */

/* 35. Ejercicio de filter:
Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números divisibles por 3. */

let arreglo35 = [9, 8, 45, 65, 68, 2];

let divisiblesPor3 = arreglo35.filter(numero => numero % 3 == 0);

/* console.log(divisiblesPor3); */

/* 36. Ejercicio de reduce:
Dado un arreglo de palabras, utiliza el método `reduce` para concatenar todas las palabras en una sola cadena. */

let arreglo36 = ["Tierra", "Cielo", "Sol", "Luna"];

let concatenarPalabras = arreglo36.reduce( (total, palabra) => total += (palabra + " "),""); //le agregue un espacio en blanco para que se vea mejor sino el resultado seria TierraCieloSolLuna 

/* console.log(concatenarPalabras);
 */

/* 37. Ejercicio combinado:
Dado un arreglo de objetos que representan estudiantes, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los estudiantes que tienen una calificación mayor a 90. Luego, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres y calificaciones de esos estudiantes. */

let arreglo37 = [
    { nombre: "Eduardo",apellido:"Montalvo", calificacion: 50 },
    { nombre: "Manuel",apellido:"Montalvo", calificacion: 95 },
    { nombre: "Fiorella",apellido:"Vasquez", calificacion: 92 },
    { nombre: "Alejandro",apellido:"Rodriguez", calificacion: 94 },
    { nombre: "Carlos",apellido:"Rodriguez", calificacion: 78 },
    { nombre: "Leon",apellido:"Torres", calificacion: 80 }
]

let calificacionMayor90 = arreglo37.filter( estudiante => estudiante.calificacion > 90).map( estudiante => ({nombre: estudiante.nombre,calificacion:estudiante.calificacion}));

/* console.log(calificacionMayor90); */

/* 38. Ejercicio combinado:
Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números positivos.Luego, utiliza el método `reduce` para calcular la suma de los números seleccionados. */

let arreglo38 = [9, 8, 45, 65, 68, 2, -1, -24, -1, -24, -80];

let numerosPositivos = arreglo38.filter(numero => numero > 0).reduce((total, numero) => total += numero,0);

/* console.log(numerosPositivos); */

/* 39. Ejercicio combinado:
Dado un arreglo de objetos que representan productos, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los productos con un precio mayor a $50.Luego, utiliza el método `reduce` para calcular el promedio de los precios de los productos seleccionados. */

let arreglo39 = [
    { nombre: "smartphone",precio: 900 },
    { nombre: "teclado",precio: 120 },
    { nombre: "mouse",precio: 50 },
    { nombre: "cargador",precio: 90 },
    { nombre: "mochila",precio: 30 }
];

let mayorQue50Promedio = arreglo39.filter( producto => producto.precio > 50).reduce((total, producto) => total += producto.precio,0);

/* console.log(mayorQue50Promedio/(arreglo39.filter( producto => producto.precio > 50)).length); */

/* 40. Ejercicio de funciones:
Crea una función llamada `saludar` que tome un nombre como argumento y devuelva un mensaje de saludo, por ejemplo: "¡Hola, [nombre]!" */

function saludar(nombre){
    return `¡Hola, ${nombre}! \n ¯\_( ͡◡ ͜ʖ ͡◡)_/¯`
}

/* console.log(saludar("Edu")); */

/* 41. Ejercicio de funciones flecha:
Convierte la función `saludar` en una función flecha. */

let sayHi = (nombre) => `¡Hola, ${nombre}! \n ⊂ ͡◉ ͜ʖ ͡◉つ`;

/* console.log(sayHi("Edu")); */

/* 42. Ejercicio de funciones anónimas:
Crea una función anónima que tome dos números como argumentos y devuelva su suma. */

let suma = function(numero1,numero2){
    return numero1 + numero2;
};

/* console.log(suma(4, 4)); */

/* 43. Ejercicio de funciones:
Crea una función llamada `calcularPromedio` que tome un arreglo de números como argumento y devuelva el promedio de esos números. */

function calcularPromedio43(...arregloNumeros){
    let total = 0;
    for(let numero of arregloNumeros){
        total += numero;
    }
    return total/(arregloNumeros.length) ;
}

/* console.log(calcularPromedio43(1,2,3,4,5)); */

/* 44. Ejercicio de funciones flecha:
Convierte la función `calcularPromedio` en una función flecha. */

/* Calcular Promedio */

function calcularPromedio44(...numeros){
    let total = 0;
    for(let numero of numeros){
        total += numero;
    }
    return total/(numeros.length);
}

/* console.log(calcularPromedio44(1,2,3)); */
/* Fin Calcular Promedio */

/* Funcion Flecha ó Arrow Function */
let promedioAFlecha = (...numeros) => {
    let total = 0;
    for(let numero of numeros){
        total += numero;
    }
    return total/(numeros.length);
}
/* console.log(promedioAFlecha(1,2,3)); */
/* Fin Funcion Flecha ó Arrow Function */


/* 45. Ejercicio de funciones anónimas:
Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con la longitud de cada palabra. */

let arreglo45 = ["palabra","argumento","devuelva"]

let longitudDeLaPalabra = arreglo45.map( function(palabra){ return palabra.length});

/* console.log(longitudDeLaPalabra); */


/* 46. Ejercicio de funciones:
Crea una función llamada `esPar` que tome un número como argumento y devuelva `true` si el número es par, y`false` si no lo es. */

function esPar(numero){
    if( numero % 2 == 0){
        return true;
    }else{
        return false;
    }
}

/* console.log(esPar(4)); */

/* 47. Ejercicio de funciones flecha:
Convierte la función `esPar` en una función flecha. */

let conocerSiEsPar = (numero) => {
    if( numero % 2 == 0){
        return true;
    }else{
        return false;
    }
}
/* console.log(conocerSiEsPar(4)); */

/* 48. Ejercicio de funciones anónimas:
Crea una función anónima que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números pares. */

let arreglo48 = [9, 8];

let numerosPares = arreglo48.filter( function (numero){ 
    if(numero % 2 == 0){
        return numero;
    }
 });

/*  console.log(numerosPares); */


/* 49. Ejercicio de funciones:
Crea una función llamada `convertirAMayusculas` que tome una cadena como argumento y devuelva la cadena en mayúsculas. */

function convertirAMayusculas(cadena){
    return cadena.toUpperCase();
}

/* console.log(convertirAMayusculas("gato")); */

/* 50. Ejercicio de funciones:
Crea una función llamada `sumar` que tome dos números como argumentos y devuelva la suma de esos números. */

function sumar(numero1,numero2){ return numero1+numero2;}

let sumadeDosNumeros = (numero1,numero2) => numero1+numero2;

/* console.log(sumadeDosNumeros(5,10));
console.log(sumar(5,10)); */

/* 51. Ejercicio de funciones flecha:
Convierte la función `sumar` en una función flecha. */

let sumarArrowFunction = (numero1, numero2) => numero1 + numero2;

/* console.log(sumarArrowFunction(2,4)); */

/* 52. Ejercicio de funciones anónimas:
Crea una función anónima que tome un arreglo de números como argumento y devuelva la suma de todos los elementos del arreglo. */

let arreglo52 = [9, 8, 45, 2];

let sumadeElementos = arreglo52.reduce(function(total,numero){
     return total += numero;
},0);

/* console.log(sumadeElementos); */

/* 53. Ejercicio de funciones:
Crea una función llamada `esPalindromo` que tome una cadena como argumento y devuelva `true` si la cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda), y `false` si no lo es. */

function esPalindromo53(cadena){
    let acumulador = "";
    for(let index = 1 ; index <= cadena.length ; index++){
        acumulador += cadena[cadena.length - index]
    }
    if( acumulador == cadena ){
        return true;
    }else{
        return false;
    }
}

/* console.log(esPalindromo53("oro")); */

/* 54. Ejercicio de funciones flecha:
Convierte la función `esPalindromo` en una función flecha. */

let palindromo = (cadena) => {
    let acumulador = "";
    for(let index = 1 ; index <= cadena.length ; index++){
        acumulador += cadena[cadena.length - index]
    }
    if( acumulador == cadena ){
        return "Es Palindromo";
    }else{
        return "No es Palindromo";
    }
}

/* console.log(palindromo("oro")); */



