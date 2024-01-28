let nota1=parseInt(prompt("ingrese nota1"))
let nota2=parseInt(prompt("ingrese nota2"))
let nota3=parseInt(prompt("ingrese nota3"))

let Promedio=(nota1+nota2+nota3)/3
parseInt("promedio")

if (Promedio>=0  && Promedio<10){
    console.log("Lo siento estas desaprobado")
}

else if (Promedio>=10 && Promedio<=20){
    console.log(" felicidades estas aprobado") 
}

else{
    alert("ingresaste un numero fuera de rango")
}
// ..............................................................................

let ciclo = prompt("Ingresa cantidad de alumnos")
numero = 1
let sumaEdades = 0

function ingresaEdad(){
    let edad = parseInt(prompt("Ingresa tu edad"))
    sumaEdades = sumaEdades+edad
}

while(numero <= ciclo){
    ingresaEdad()
    numero++
}

let promedioEdad = sumaEdades/ciclo
console.log("promedio de edad es:"+" "+ promedioEdad);