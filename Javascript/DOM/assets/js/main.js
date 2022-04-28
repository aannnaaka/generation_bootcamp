
const $titulo = document.querySelector("h1");
const $parr = document.querySelector("p");
const $card = document.querySelector(`.card`);

//nodeName - nos dice el nombre del elemento
console.log($parr.nodeName);
console.log($h1.nodeName);


//textContent - puede cambiar el texto de un elemento
console.log($parr.textContent);
$parr.textContent += "Hola mundo";


//se le asigna un nuevo valor
$titulo.textContent = "Modificando elementos con JS";

//innerText - mejor no usarla 

$parr.innerHTML = '<a href="#"> Estes es un enlace </a>';
console.log($parr.innerHTML);

//outerHTML
//reemplaza todo, incluido el elemento que seleccionamos
$parr.outerHTML = `<a href="#">`;

//Crear elementos de html

function crearElemento(){
    const img = document.createElement(ìmg``);

    //appenChild
    $card.appendChild(img);
}

crearElemento();