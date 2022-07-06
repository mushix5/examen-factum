getCollatz = async (numero) => {
    const insuperable = Math.pow(2, 58);
    if(numero > insuperable){
        return 'No es posible ejecutar Collatz para este numero'
    }
    let modActual = 0;
    let numActual = numero;
    let sucesion = [numero];
    do {
        modActual = numActual%2;
        if(modActual === 0) {
            numActual = numActual/2;
            sucesion.push(numActual);
        } else if(modActual){
            numActual = (numActual*3)+1;
            sucesion.push(numActual);
        }
        console.log(numActual);
    } while (numActual != 1);
    console.log(sucesion);
    return sucesion;
}

module.exports = {
    getCollatz
}