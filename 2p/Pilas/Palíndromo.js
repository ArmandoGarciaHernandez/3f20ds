function Palíndromo(cadena) {
    return cadena == cadena.split('').reverse().join('');
}
console.log(Palíndromo('radar')); //Palabra a verificar