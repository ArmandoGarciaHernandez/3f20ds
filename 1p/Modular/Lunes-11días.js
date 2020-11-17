let diaF = 11;
let modulo = 7;
let resultado = ((diaF) % modulo);
console.log('Si hoy es lunes, ¿Qué día fue hace 11 días?');

switch (resultado) {
    case 1:
        console.log('Lunes')
        break;
    case 2:
        console.log('Martes')
        break;
    case 3:
        console.log('Miércoles')
        break;
    case 4:
        console.log('Jueves')
        break;
    case 5:
        console.log('Viernes')
        break;
    case 6:
        console.log('Sábado')
        break;
    case 7:
        console.log('Domingo')
        break;

    default:
        break;
}
let end = Date.now();
//Lunes = 1er día de la semana = 1;