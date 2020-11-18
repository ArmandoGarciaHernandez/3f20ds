let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a = x.map(function (x, index) {
    x = 'name';
    return x + index;

})
console.log(a);