
addEventListener("load",function(){
    this.alert("Se ha terminado de cargar la pagina");
});

function saludar(){
    alert('hola desde un manejador de eventos');
}


const $botonSemantico = document.getElementById("evento-semantico");

$botonSemantico.onclick = function(evento){
    //alert("hola desde un manejador semantico");
    console.log(evento.target);
}

/*Manejador de eventos multiple*/
const $botonMultiple = document.getElementById("evento-multiple");

$botonMultiple.addEventListener("click",function(){
    alert("hola mundo");
})

$botonMultiple.addEventListener("click",function(e){
    console.log(e.target);
})

function saludarMultiple(){
    alert("Hola desde manejador multiple");
}