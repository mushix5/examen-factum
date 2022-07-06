async function getIMC(peso, altura) {
    if(!peso || !altura) {
        return "No se puede realizar el calculo"
    }
    let altura_metros = altura < 3 ? altura:(altura/100);
    console.log(altura);
    let result = peso/(altura_metros*altura_metros);
    return result.toFixed(2);
} 

module.exports =  {
    getIMC
}