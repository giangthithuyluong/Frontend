var array = [1,5,7,8,9,15];

//a
var text = "";
array.forEach(v => {
    if(v%2==0)
        text += v + " ";
});
console.log(text);

//b
text = "";
array.forEach(v => {
    if(v%2!=0)
        text += v + " ";
});
console.log(text);

//c
text = "";
array.forEach(v => {
    if(v >= 5)
        text += v + " ";
});
console.log(text);

//d
text = "";
array.forEach(v => {
    if(v%5==0)
        text += v + " ";
});
console.log(text);

//e
array = array.map(v => v > 5 ? v+1 : v);

//f
var copyArr = array.slice(3);

//g
array.splice(0, 1);

//h
array.push(10);

console.log(array);