var arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11'];

//a
var arr1 = arr.filter(v => typeof(v) == 'number').sort((a, b) => a - b);
var arr2 = arr.filter(v => typeof(v) == 'string').sort();

function chiaptu(array) {
    var chia = [];
    array.forEach(v => {
        if(chia.length == 0 || chia.find(x => typeof(x[0]) == typeof(v)) == undefined) {
            chia.push([v]);
        } else {
            chia.find(x => typeof(x[0]) == typeof(v)).push(v);
        }
    });
    chia.forEach(v => {
        typeof(v[0]) == 'number' ? v.sort((a, b) => a - b) : v.sort();
    })
    return chia;
}

console.log(chiaptu(arr));

//b
var tong = arr1.reduce((tong, value)=> tong+value, 0);
arr2.forEach(v => {
    if(!Number.isNaN(Number.parseInt(v)))
        tong += Number.parseInt(v);
})
console.log(tong);

//c
arr.sort((a, b) => a - b);
console.log(arr);

//d
var snt = arr.reduce((so, value) => {
    if(typeof(value) == "number" && value > 1) {
        if(value == 2) so.push(value);
        for (let i = 2; i <= Math.ceil(Math.sqrt(value)); i++) {
            if(value%i==0) break;
            if(i==Math.ceil(Math.sqrt(value))) so.push(value);
        }
    }
    return so;
}, []);
console.log(snt);