getFibonacci = (cantidad) => {
    let numeros = [0,1]
    for(let i = 2; i<cantidad; i++) {
        numeros.push(numeros[i-1]+numeros[i-2]);
    }
    console.log(numeros);
    return numeros;
}

esfibonacci = (numero) => {
    let continuar = true;
    let numeros = [0,1]
    let indexActual = 2;
    let numeroActual = 0;
    let esFibo = false;
    if(numeros.includes(numero)){
        return true;
    }
    while (continuar) {
        numeroActual = numeros[indexActual-1]+numeros[indexActual-2];
        indexActual++;
        if(numero === numeroActual) {
            esFibo = true;
            continuar = false;
        } else if(numero < numeroActual) {
            continuar = false;
        }
        numeros.push(numeroActual);
    }
    console.log(numeros);
    return esFibo;
}

module.exports = {
    getFibonacci,
    esfibonacci
}