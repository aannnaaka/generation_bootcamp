//escribe un ciclo anidadque imprima el siguiente patron

/*
*
* *
* * *
* * * *
*/


for (let i=1; i<=5; i++){ //1 2
    for (let j=1; j<=i; j++){
        document.write("*")
    }
  document.write("<br>")
}

const ejercicio1 = (xValue) => {
    if (xValue < 0) {
      return console.log('Ingresa un número positivo')
    } else {
      while (xValue > 0) {
        xValue  -= 0.5;
        console.log(xValue);
      }
    }
  }
  
  ejercicio1(4)

  const ejercicio2 = () => {
    for (let i = 1; i <= 100; i++) {
      if (i%2 === 1) {
        console.log(i);
      }
    }
  }
  
  ejercicio2()

  const ejercicio3 = (n) => {
    let i = 1;
    let str = [];
    while (i <= n) {
      str += `[${i}] `
      i++;
    }
    console.log(str);
  }
   
  ejercicio3(10)