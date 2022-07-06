async function getArrayNumbers(cantidad, min, max) {
    let result = [];
    let suma = 0;
    let promedio = 0;
    let rango = 0;
    let maximo = 0;
    let minimo = Number.MAX_VALUE;
    let actual = 0;

    for(let i =0; i<cantidad; i++) {
        actual = Math.floor(Math.random()*(max-min+1)+min);
        result.push(actual);
        if(actual < minimo) {
            minimo = actual;
        }
        if(actual > maximo) {
            maximo = actual;
        }
        suma += actual; 
    }
    promedio = suma/cantidad;
    rango = maximo-minimo;

    return {
        "numeros": result,
        suma,
        promedio,
        rango,
        maximo,
        minimo,
    }

}

module.exports =  {
    getArrayNumbers
}