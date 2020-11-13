let x = prompt('Ingresa el valor máximo de los valores aleatorios');
for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * x));
}