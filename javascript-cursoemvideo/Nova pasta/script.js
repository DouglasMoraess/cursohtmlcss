var num1 = document.querySelector('#num1')
var num2 = document.querySelector('#num2')
var resultado = document.querySelector('#res')


function somar (){
    resultado.innerHTML =parseInt(num1.value) + parseInt(num2.value)
}


function subtrair (){
    resultado.innerHTML =parseInt(num1.value) - parseInt(num2.value)
}


function dividir (){
    resultado.innerHTML =parseInt(num1.value) / parseInt(num2.value)
}



function multiplicar (){
    resultado.innerHTML =parseInt(num1.value) * parseInt(num2.value)
}