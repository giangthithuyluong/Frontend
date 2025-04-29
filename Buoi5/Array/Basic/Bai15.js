var data = [1,2,3,1,2,3,4,5,6,5,4,6,3];

var result = data.reduce((pre, value) => {
    if(pre.find(v => v.phanTu == value) == undefined) {
        pre.push({phanTu: value, lapLai: 1});
    } else {
        pre.find(v => v.phanTu == value).lapLai++; 
    }
    return pre;
},[]);

console.log(result);