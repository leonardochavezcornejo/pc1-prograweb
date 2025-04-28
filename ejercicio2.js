let suma = function(){
    const numero1=document.getElementById("numero1").value
    const numero2 =document.getElementById("numero2").value
    let resultado = parceInt(numero1+numero2)
    console.log(resultado)

}


let resta = function(){
    const numero1=document.getElementById("numero1").value
    const numero2 =document.getElementById("numero2").value
    let resultado = parceInt(numero1-numero2)
    console.log(resultado)

}



let multiplicacion = function(){
    const numero1=document.getElementById("numero1").value
    const numero2 =document.getElementById("numero2").value
    let resultado = parceInt(numero1*numero2)
    console.log(resultado)

}




let division = function(){
    const numero1=document.getElementById("numero1").value
    const numero2 =document.getElementById("numero2").value
    let resultado = parceInt(numero1/numero2)
    console.log(resultado)

}
let inputElement=document.getElementById("resultado")
let resultado=resultado
inputElement.value= resultado