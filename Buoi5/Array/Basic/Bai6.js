var data = [1,2,3,1,2,3,4,5,6,5,4, 3,6];

data = data.filter((v, i) => {
    return data.indexOf(v, i+1) != -1 && v;
})
data = data.filter((v, i) => {
    return data.indexOf(v, i+1) == -1 && v;
})
console.log(data);