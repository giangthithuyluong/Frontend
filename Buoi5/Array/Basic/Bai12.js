var array1 = [1,5,6,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];

//a
let first = array1.indexOf(7);
console.log(first);

//b
let last = array1.lastIndexOf(7);
console.log(last);

//c
array1.sort();
console.log(array1);
array1.sort((a, b) => b - a);
console.log(array1);

//d
var array2 = array1.filter(v => v > 5);
console.log(array2);

//e
var array3 = array1.filter(v => v > 5 && (v+2)%3 == 0);
console.log(array3);