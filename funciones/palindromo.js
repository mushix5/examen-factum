module.exports.esPalindromo = async (palabra) => {
    const data = `${palabra}`;
    const longitud = data.length;
    if(longitud === 1){
        return true;
    }
    for(let i = 0; i<((longitud/2)+1); i++) {
        if(data.charAt(i) != data.charAt(longitud-(i+1))){
            return false;
        }
    }
    return true;
}