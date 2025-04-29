var arr2 = ['4', '6', 1, 2, 3, 5, 'y', 't', 5];
var tong = 0;
arr2.forEach((v, i) => {
    if(typeof(v) == "number") 
        tong += v;
});
console.log(tong);