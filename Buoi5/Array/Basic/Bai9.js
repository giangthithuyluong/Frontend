var array = [1,3,7,8,9,0,10,3,2];

//a
array.sort();

//b
var array2 = array.map(v => v*2);

//c
var array3 = [1,2,3,5,1];
console.log(array3.concat(array));

//d
array.splice(5, 0, array3);
console.log(array);

//e
var le = array.filter(v => v%2!=0);
var chan = array.filter(v => v%2==0);
console.log(le + " " + chan);

//f
array.splice(array.length/2, 0, 5);