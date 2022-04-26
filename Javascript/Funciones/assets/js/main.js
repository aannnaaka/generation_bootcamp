/*Funciones, nos permiten reutilizar código*/

function saludar(nombre="panchito",apellido = ""){
    
/* console.log(`hola mi nombre es ${nombre}`);//template Strings || Plantillas literales
} */
/*console.log("Hola mi nombre es:",nombre,apellido);*/
return`Mi nombre es ${nombre} ${apellido}`
}

/*operador ternario  
console.log(`hola mi nombre es ${nombre?"Raul":"Desconocido"}`);
*/
saludar("Pedro","Pérez");

let funcionSaludar = saludar(`Felipe`,`Maqueda`);
console.log(funcionSaludar);

console.log(saludar(`Alberto`,`Hernandez`));

/* document.write(`<h1>Este es un h1</h1>`);
console.log(`<h1>Este es un h1</h1>`);
console.log("<h1>Este es un h1</h1>"); */

/*Funcion declarada*/

function suma(a,b){
    return a+b;
}

console.log(suma(10,20));

/*Funciones expresadas o función expresión*/
const resta = function(a,b){
return a-b;
}
console.log(resta(30,10));

//function flecha
const multiplicacion = (a,b) => a*b;

console.log(multiplicacion(40,5));