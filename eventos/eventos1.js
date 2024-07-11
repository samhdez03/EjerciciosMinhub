let calcular= document.getElementById("calcularPeso")
let resultado= document.getElementById("resultado")

calcular.addEventListener('click', (imc)=> {
    let estatura= document.getElementById("estatura").value
    estatura=estatura/100
    let peso= document.getElementById("peso").value
    resultado.value= (peso/(estatura*estatura)).toFixed(2)


})

let peso=document.getElementById("inputPeso")
let dolar=document.getElementById("inputDolar")
let valorDolar=17.82
peso.addEventListener('keyup', (p)=>{
    dolar.value=(p.target.value/valorDolar).toFixed(2)

})

dolar.addEventListener('keyup', (d)=>{
    peso.value=(d.target.value*valorDolar).toFixed(2)
}

)
