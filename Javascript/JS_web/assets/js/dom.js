
/*Algunas cosas que podemos hacer con DOM*/
console.log(window.document);
console.log(document);
console.log(document.head);//REGRESA EL HEAD DEL DOCTO
console.log(document.body);//REGRESA EL BODY
console.log(document.documentElement);//REGRESA TODO EL HTML
console.log(document.doctype);
console.log(document.charset);
console.log(document.links);
console.log(document.images);
console.log(document.stylesheets);//regresa los css
console.log(scripts);//regresa las etiquetas script

setTimeout(()=>{
console.log(document.getSelection().toString());
},3000);

document.write("Hola mundo desde document write");
document.write("<h2>Hola mundo desde document write</h2>")