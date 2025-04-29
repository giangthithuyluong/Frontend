var data2 = [1,1,3,4,4,5,6,7,9];

//a
data2.push(8);

//b
data2.push(10);

//c
data2.unshift(5);

//d
data2.splice(5, 1, 11);

//e
data2.splice(4, 1, 5, 7);

console.log(data2);