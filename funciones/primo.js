esPrimo = async (numero) => {
    let noPrimos = [0,1]
    if(noPrimos.includes(numero)){
        return false;
    }
    for(let i = 2; i < numero; i++) {
        if(numero != i && numero%i === 0){
            return false;
        }
    }
    return true;
}

module.exports = {
    esPrimo
}