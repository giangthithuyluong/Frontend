var array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];

//a
var newArray = array3.filter(v => v%2 == 0);

//b
var newArray2 = array3.filter(v => v%2 != 0 && v > 3);

console.log(newArray);
console.log(newArray2);