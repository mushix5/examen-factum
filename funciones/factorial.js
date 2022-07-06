esFactorial = async (numero) => {
    let numActual = 1;
    let i = 1;
    let esFact = false;
    do {
        numActual = numActual * i;
        i++;
        if(numActual === numero) {
            esFact = true;
        }
    } while(numActual <= numero);
    return esFact;
}

getFactorial = async (numero) => {
    let numActual = numero;
    if(numero === 0){
        return 1;
    }
    for(let i = 1; i<numero; i++){
        numActual=numActual*(numero-i);
        console.log(numActual);
    }
    return numActual;
}

module.exports = {
    esFactorial,
    getFactorial
}