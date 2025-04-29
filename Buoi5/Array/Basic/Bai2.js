var data03 = ["Cam", "Xoai", "Mit", "Buoi", "Quyt", "Dua gang"];

//a
var newdata = [...data03];

//b
data03 = data03.map(value => value == "Dua gang" ? "Dua hau" : value);

//c
data03.splice(data03.length/2, 0, "man");

//d
data03.unshift("Dua");
data03.push("Chanh");

console.log(data03)