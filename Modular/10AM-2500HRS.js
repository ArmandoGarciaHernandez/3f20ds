let horaI = 10;
let HoraF = 2500;
let resta = HoraF - horaI;
let modulo = 24;

console.log('Si son la 10 AM, ¿qué horas serán en 2500hrs?');
console.log('Serían la(s) ' + (resta % modulo) + (' hr(s) del día'));

//Formato 24 hrs